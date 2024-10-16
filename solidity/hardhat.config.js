require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    bscTestnet: {
      accounts: ['bf8939afe511f3a8bd940a4e2fb74773618a6dc4a83fc1b476931f12bbadcf66'],
      chainId: 97,
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    }
  }
};
