//https://eth-ropsten.alchemyapi.io/v2/UCmBCWvFDJH4IsA0ViTH7f4YA-8sVBbs

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/UCmBCWvFDJH4IsA0ViTH7f4YA-8sVBbs",
      accounts: [
        "1c4a76a05b024f302767df25f72831a45ed6fbfe34270747bf9d9891ddfc267c",
      ],
    },
  },
};
