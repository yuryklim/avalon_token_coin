pragma solidity ^0.4.22;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract AvalonTokenCoin is MintableToken {
  string public name = "Avalon Token Coin";
  string public symbol = "ATC";
  uint public decimals = 18;
  constructor(uint256 _amount) public {
    owner = msg.sender;
    mint(owner, _amount);
  }
}
