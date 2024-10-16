// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  const tokenContract = m.contract("Token", ['Test Token', 'TT', 1000000]);

  return { tokenContract };
});
