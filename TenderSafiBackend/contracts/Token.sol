// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TenderSafiToken is ERC20 {
    constructor(address tendersafiaddress) ERC20("TendersafiToken", "TDS") {
        _mint(tendersafiaddress, 10 * 10000 ** 18);
    }
}
