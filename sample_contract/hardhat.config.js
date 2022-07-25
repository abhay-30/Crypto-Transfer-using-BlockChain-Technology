// https://eth-rinkeby.alchemyapi.io/v2/bXvKyVvYkOclcpeFVgajvIl7fplTEkDt

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/bXvKyVvYkOclcpeFVgajvIl7fplTEkDt',
      accounts: ['80b79a10a40da04536acb934f3b6a14fd450bc704467ed02322937c985a814c9'],
    },
  },
};