// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
require("dotenv").config();
const { MNEMONIC_PHRASE } = process.env;

const provider = new HDWalletProvider(
  MNEMONIC_PHRASE,
  "https://kovan.infura.io/v3/f2f83b1381ab4423ac17fb197b561d29"
);

const web3 = new Web3(provider);
