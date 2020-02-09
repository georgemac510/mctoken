const mctoken = artifacts.require("mctoken");

module.exports = function(deployer) {
  const _name = 'mctoken';
  const _symbol = 'MKC';
  const _decimals = 18;

  deployer.deploy(mctoken, _name, _symbol, _decimals);
};
