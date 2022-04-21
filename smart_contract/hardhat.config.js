// https://eth-ropsten.alchemyapi.io/v2/rZxOsUmrh47QqtVaNLQC94-crHeicpV9

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rZxOsUmrh47QqtVaNLQC94-crHeicpV9",
      accounts: [
        "461d893c3dbdc4f8c4298a0bcc177065a4a63e114f85781b06a8fafcaa000740",
      ],
    },
  },
};
