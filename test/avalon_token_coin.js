var AvalonTokenCoin = artifacts.require("./AvalonTokenCoin.sol");

contract('AvalonTokenCoin', function(accounts) {
  it("Create 1 400 000 tokens at the owner account", function(done) {
    AvalonTokenCoin.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(web3.toWei(balance.valueOf(), 'ether'), web3.toWei(1400000, 'ether'), "1400000 wasn't in the first account");
    });
    done();
  });
  it('Should transfer tokens correctly', function(done){
    var token;
    var amount = 10;

    var account_one = accounts[0];
    var account_two = accounts[1];

    var acc_one_before;
    var acc_one_after;
    var acc_two_before;
    var acc_two_after;

    AvalonTokenCoin.deployed().then(function(instance){
      token = instance;
      return token.balanceOf.call(account_one);
    }).then(function(balanceOne) {
      acc_one_before = balanceOne.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balanceTwo) {
      acc_two_before = balanceTwo.toNumber();
      return token.transfer(account_two, amount, {from: account_one});
    }).then(function() {
      return token.balanceOf.call(account_one);
    }).then(function(balanceOne){
      acc_one_after = balanceOne.toNumber();
      return token.balanceOf.call(account_two);
    }).then(function(balanceTwo){
        acc_two_after = balanceTwo.toNumber();

        assert.equal(acc_one_after, acc_one_before - amount, "Token transfer works wrong!");
        assert.equal(acc_two_after, acc_two_before + amount, "Token transfer works wrong!");
    });
    done();
  });
});
