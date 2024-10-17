require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.20',
  networks: {
    bscTestnet: {
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 97,
      url: `${process.env.RPC_URL}`,
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};
