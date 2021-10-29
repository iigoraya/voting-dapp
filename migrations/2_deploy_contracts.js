const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Mohammad', 'Ibrahim', 'Ismail'].map(name => web3.utils.asciiToHex(name)));
};