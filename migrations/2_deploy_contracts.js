var AvalonTokenCoin = artifacts.require("./AvalonTokenCoin.sol");

module.exports = function(deployer) {
  const tokenAmount = 1400000;
  deployer.deploy(AvalonTokenCoin, tokenAmount);
};
