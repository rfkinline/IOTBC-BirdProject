const Token = artifacts.require("Birdcontract");

module.exports = function(deployer) {
  deployer.deploy(Token);
};