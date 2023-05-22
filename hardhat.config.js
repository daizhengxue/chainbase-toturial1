require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// Go to https://chainbase.com/, sign up, create a new API key
// Replace this private key with your wallect account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

const Network_URL = process.env.Network_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;



module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: Network_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};