async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "My First Gundam",
      attributes: [
        {
          trait_type: "Ethereum",
          value: "10",
        },
        {
          trait_type: "Flashbot",
          value: "100",
        },
        {
          trait_type: "MEV",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/Qmcvu4acEYAeesqRTc2ErKWY8XDJNGf7cFwrCUDZy2e4Un",
      description: "Gundam Bot!",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
