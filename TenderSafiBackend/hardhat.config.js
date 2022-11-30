require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
