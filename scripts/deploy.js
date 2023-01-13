async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyGundam = await hre.ethers.getContractFactory("MyGundam");

  const nft = await MyGundam.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(
    await signer0.getAddress(),
    "ipfs://QmeDDG5k3hr7NvJwAtZveEdqQAVHuftN4WzQCYadeLK5sU"
  );

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
