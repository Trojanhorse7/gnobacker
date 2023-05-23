require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
  defaultNetwork: "chiado",
  networks: {
    hardhat: {
    },
    gnosis: {
      url: process.env.ENDPOINT_URL,
      accounts: [process.env.DEPLOYER_KEY],
      saveDeployments: true,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [process.env.DEPLOYER_KEY],
      saveDeployments: true,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
        },
      },
    ],
    apiKey: {
      chiado: "49a5f48c-c189-451f-b54e-51a389bccd49",
      gnosis: "ZDYM436ZEZW5NZM3SSKEG7DZ1NC16WCCYC",
    },
  },
  
}