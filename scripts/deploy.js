async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Chainbase, Ahead Four!");

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("DataMustFlow");
  const token = await Token.deploy();

  console.log("Deployed Contract address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });