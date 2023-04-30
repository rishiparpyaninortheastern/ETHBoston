const main = async () => {
  const hiringFactory = await hre.ethers.getContractFactory('ChainHire');
  const hiringContract = await hiringFactory.deploy();

  await hiringContract.deployed();

  console.log("Transactions address: ", hiringContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();