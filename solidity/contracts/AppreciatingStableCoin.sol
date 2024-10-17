// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AppreciatingABCToken is ERC20, Ownable {
    IERC20 public usdcToken;
    uint256 public constant DECIMALS = 6; // Same as USDC
    uint256 public constant FEE_DENOMINATOR = 10000;
    uint256 public transactionFee = 100; // 1% fee (100/10000)
    uint256 public totalFees;
    
    constructor(address _usdcAddress) ERC20("Appreciating ABC Token", "aABC") Ownable(msg.sender) {
        usdcToken = IERC20(_usdcAddress);
    }
    
    function mint(uint256 amount) external {
        require(usdcToken.transferFrom(msg.sender, address(this), amount), "USDC transfer failed");
        _mint(msg.sender, amount);
    }
    
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
        uint256 usdcToReturn = (amount * (FEE_DENOMINATOR - transactionFee)) / FEE_DENOMINATOR;
        totalFees += amount - usdcToReturn;
        require(usdcToken.transfer(msg.sender, usdcToReturn), "USDC transfer failed");
    }
    
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        uint256 fee = (amount * transactionFee) / FEE_DENOMINATOR;
        uint256 amountAfterFee = amount - fee;
        totalFees += fee;
        return super.transfer(recipient, amountAfterFee);
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
        uint256 fee = (amount * transactionFee) / FEE_DENOMINATOR;
        uint256 amountAfterFee = amount - fee;
        totalFees += fee;
        return super.transferFrom(sender, recipient, amountAfterFee);
    }
    
    function getReserves() external view returns (uint256) {
        return usdcToken.balanceOf(address(this));
    }
    
    function withdrawFees() external onlyOwner {
        require(usdcToken.transfer(owner(), totalFees), "Fee transfer failed");
        totalFees = 0;
    }
    
    function setTransactionFee(uint256 newFee) external onlyOwner {
        require(newFee <= 1000, "Fee too high"); // Max 10%
        transactionFee = newFee;
    }
}
