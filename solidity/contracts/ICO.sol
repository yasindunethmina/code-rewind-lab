// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ICO is ERC20, Ownable {
    uint256 public constant TOKEN_PRICE = 0.001 ether;
    uint256 public constant MAX_TOKENS = 1000000 * 10**18; // 1 million tokens
    uint256 public tokensSold = 0;
    bool public icoActive = false;

    constructor() ERC20("SimpleToken", "STK") Ownable(msg.sender) {}

    function startICO() external onlyOwner {
        require(!icoActive, "ICO is already active");
        icoActive = true;
    }

    function endICO() external onlyOwner {
        require(icoActive, "ICO is not active");
        icoActive = false;
    }

    function buyTokens() external payable {
        require(icoActive, "ICO is not active");
        require(msg.value >= TOKEN_PRICE, "Not enough ETH sent");
        
        uint256 tokensToMint = (msg.value * 10**18) / TOKEN_PRICE;
        require(tokensSold + tokensToMint <= MAX_TOKENS, "Exceeds maximum token supply");

        _mint(msg.sender, tokensToMint);
        tokensSold += tokensToMint;
    }

    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
