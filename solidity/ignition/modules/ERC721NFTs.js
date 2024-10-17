// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('ERC721NFTs', (m) => {
  const erc721NftsContract = m.contract('ERC721NFTs');

  return { erc721NftsContract };
});
