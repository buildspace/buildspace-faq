# Call revert exception

**Why is this happening?**
* Your metamask wallet is not connected to the correct network
* Your contract is not deployed
* You did not update your ABI after deploying your contract
* You did not implement this function in your smart contract

**✅ Solutions**
* Make sure you're connected to the correct network your smart contract is deployed to. If your contract is deployed to Rinkeby, make sure you're connected to the Rinkeby network
* Deploy by running `npx hardhat run scripts/deploy.js --network rinkeby`
* Make sure to update your ABI to the latest version after deploying your smart contract
* Remember to save your changes in your smart contract before deploying
