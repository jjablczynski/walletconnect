import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "1bf9bc8bc86943f5b7ef09ea615157de" // Required
});

//  Enable session (triggers QR Code modal)
async function callX() {
  await provider.enable();
}

callX();

//  Create Web3
// const web3 = new Web3(provider);

// Subscribe to accounts change
provider.on("accountsChanged", (accounts) => {
  console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId) => {
  console.log(chainId);
});

// Subscribe to session connection
provider.on("connect", () => {
  console.log("connect");
});

// Subscribe to session disconnection
provider.on("disconnect", (code, reason) => {
  console.log(code, reason);
});
