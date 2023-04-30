require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    ETH_GOERLI: {
  url:'https://eth-goerli.g.alchemy.com/v2/3F7dI-3HZwehvihCp_9-aSW2jEg1sgm6',
  accounts:['13ff45f62a4a6a5bc34026f47cc7b6676fdb8e17907b112ef1087f554c8aaa49']
  

    }

  }
};
