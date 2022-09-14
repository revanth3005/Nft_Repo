require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("hardhat-deploy-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {version:'0.8.0'},
      {version:'0.8.1'},
      {version:'0.8.2'}
    ]
  },
  networks:{
    mumbai:{
      url:'https://rpc-mumbai.maticvigil.com/v1/3bff3e3328b12c84062e692071aef4058d5b474e',
      chainId:80001,
      accounts:['63b09a45a668af02a0a8cd7df59b395a292ee2f5cbfc8ed241dcbabd8bda17d3']
    }
  },
  namedAccounts:{
    deployer:{
      default:0
    }
  }
};
