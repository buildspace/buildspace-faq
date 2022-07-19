# Check if a user owns an NFT
Guide written by [@helloitsm3](https://github.com/helloitsm3)

There are many ways you can validate if user owns an NFT and in this guide, I will list down some of the ways on how you can go about doing this. 

1. [Check from the contract directly to check if the user owns an NFT (Easiest method)](#smart-contract)
2. Make use of Etherscan API to check if the user owns an NFT
   - [ERC721](#erc721)
3. [You can write a subgraph to check if the user owns an NFT (This is the most complicated way and might be a little over kill)](#subgraph)

## ✅ Solutions

### Smart contract
   - Although this is the easiest way and fits most of the small NFT projects but it's not ideal if you have a huge NFT project with hundreds of transactions happening a day. Querying from the blockchain can be slow and if you're interested, you can learn more about it [here](https://ethereum.stackexchange.com/questions/123338/why-are-local-reads-so-slow).


Before you start, make sure you run `npm install ethers wagmi`
- [ethers](https://docs.ethers.io/v5/): Allows you to interact with the ethereum blockchain easily using JavaScript.
- [wagmi](https://wagmi.sh): A collection of React hooks that handles all the account connection and contract interactions.

```javascript
import { ethers } from "ethers";
import abi from "./utils/SmartContract.json";           // This should be your smart contract ABI
import { useAccount, useContract } from "wagmi";        // This is used to get your wallet address
import React, { useEffect, useState } from "react";

const App = () => {
  const contractABI = abi.abi;
  const { address } = useAccount();                             // Hook to fetch your wallet address
  const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";        // Your smart contract address
  const contract = useContract({                                // Hook to fetch contract interface
      addressOrName: contractAddress,
      contractInterface: contractABI,
  });

  const isNFTHolder = async () => {
    // This will check if your wallet have a balance of more than 0. 
    // If it's true, it means the wallet contains an NFT from your contract.
    const data = await contract.methods.balanceOf(address).call();
    return parseInt(data, 10) > 0;
  };

  useEffect(() => {
    isNFTHolder();          // This gets triggered when your page first loads
  }, []);

  return <div>Hello World</div>;
};

```


### Using Etherscan API to fetch user data and check if they own an NFT
   
#### ERC721
```javascript
import { useAccount } from "wagmi";                             // This is used to get your wallet address
import React, { useEffect, useState } from "react";

const App = () => {
  const { address } = useAccount();                             // Hook to fetch your wallet address
  const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";        // Your smart contract address

  const isNFTHolder = async () => {
    const API_KEY = "YOUR_ETHERSCAN_API_KEY";
    const CONTRACT_ADDRESS = "";
    const baseURL = `https://api.etherscan.io/api?
                module=account&action=tokennfttx&
                contractaddress=${CONTRACT_ADDRESS}&
                address=${address}&
                page=1&
                offset=100&
                startblock=0&
                sort=asc&
                apikey=${API_KEY}`
                
    const data = await fetch(baseURL);
    
    // Loop through array to see if the contract sent any NFT to your account
    // If it exist, it'll return true
    data.result.map(result => {
      if (result.to === address) {
        return true;
      }
    });
   
    return false;
  };

  useEffect(() => {
    isNFTHolder();          // This gets triggered when your page first loads
  }, []);

  return <div>Hello World</div>;
};

```

### Subgraph
You will first need to follow these steps to setup subgraph/
1. `npm install -g @graphprotocol/graph-cli`
2. `graph init --product subgraph-studio --from-contract <CONTRACT_ADDRESS>`

Once that's done, your project file structure should look like this
```
├── SmartContractName
│   ├── abis
│   │   ├── smartcontractabi.json
│   ├── src
│   │   ├── mapping.ts
├── networks.json
├── package.json
├── schema.graphql
├── subgraph.yaml
├── tsconfig.json
```

Follow this step to edit the necessary files
1. Open up `src/mapping.ts` and add this code in
```typescript
import { Approval, ApprovalForAll, Claim, OwnershipTransferred, Transfer } from "../generated/SmartContract/SmartContract";
import { User } from "../generated/schema";

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleClaim(event: Claim): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
    // This will create a new user object based on the transfer event in the blockchain
    let user = new User(event.params.tokenId.toHex());
    
    // Checks if the user exists
    if (user) {
        // Here's an example of the event data https://etherscan.io/tx/0x29da2e27440d27a719e4de6fbf261630b226f25f9ffe1cf5370a012f90fb2026
        user.owner = event.params.to.toHex();     // Sets the owner to owner address from the transfer event
        user.tokenId = event.params.tokenId;      // Sets the tokenID to the tokenID from the transfer event
        user.save();                              // Saves the user to the subgraph store
    }
}
```

2. Add this code in `networks.json` 
```json
{
    // If your contract is deployed to polygon, it should be `matic`.
    // If it's deployed to ethereum, it should be `ethereum`.
    "ethereum": {
        "SmartContract": {
            "address": "YOUR_CONTRACT_ADDRESS",
            // This should be the block number of the first transaction from your smart contract. 
            // AKA your contract creation
            "startBlock": 19622847                
        }
    }
}
```

3. Add this code to your `schema.graphql`
```graphql
type User @entity {
    id: ID!
    owner: String!
    tokenId: BigInt!
}
```

4. Add this code to your `subgraph.yaml`
```yaml
specVersion: 0.0.2
schema:
    file: ./schema.graphql
dataSources:
    - kind: ethereum
      name: SmartContract              // This should be your smart contract name
      network: ethereum                // This should be the network your smart contract is deployed to
      source:
          address: "SMART_CONTRACT_ADDRESS" 
          abi: Smartcontract          // This is your smart contract name
          startBlock: 19622847        // This is the first block number of your smart contract (Contract creation block)
      mapping:
          kind: ethereum/events
          apiVersion: 0.0.5
          language: wasm/assemblyscript
          entities:
              - Approval
              - ApprovalForAll
              - Claim
              - OwnershipTransferred
              - Transfer
          abis:
              - name: SmartContract
                file: ./abis/smartcontractabi.json
                
          // These are all your event handlers from your contract
          // Make sure the parameters correspond to your smart contract parameters
          // This needs to be exactly the same if not your subgraph will fail
          eventHandlers:
              - event: Approval(indexed address,indexed address,indexed uint256)
                handler: handleApproval
              - event: ApprovalForAll(indexed address,indexed address,bool)
                handler: handleApprovalForAll
              - event: Claim(indexed address,indexed string,uint128,uint256,bool)
                handler: handleClaim
              - event: OwnershipTransferred(indexed address,indexed address)
                handler: handleOwnershipTransferred
              - event: Transfer(indexed address,indexed address,indexed uint256)
                handler: handleTransfer
          file: ./src/mapping.ts
```

5. Go to https://thegraph.com/studio/ and login to your wallet and create a subgraph name

6. Make sure your package.json looks like this. Replace `helloitsm3/smartcontract` to your subgraph name you created above.
```json
{
    "name": "smartcontract",
    "license": "UNLICENSED",
    "scripts": {
        "codegen": "graph codegen",
        "build": "graph build",
        "deploy": "graph deploy --node https://api.studio.thegraph.com/deploy/ helloitsm3/smartcontract",
        "create-local": "graph create --node http://localhost:8020/ buildspace",
        "remove-local": "graph remove --node http://localhost:8020/ buildspace",
        "deploy-local": "graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 buildspace"
    },
    "dependencies": {
        "@graphprotocol/graph-cli": "0.29.0",
        "@graphprotocol/graph-ts": "0.26.0"
    }
}
```

6. `npm run deploy`
7. Your subgraph should be successfully deployed and it should start querying your smart contract
8. If everything is done correctly, it should finish querying after a few hours depending on how big your NFT project is. The more transactions you have in your contract, the longer it'll take to query. This will only happen once and subsequently, it should automatically query whenever there's a new transaction.
9. To fetch a list of your NFT holders, you can do so like this. This will fetch all the NFT the user holds.
```graphql
{
  users(
    where: { 
      owner:  "YOUR_WALLET_ADDRESS"
    }
  ) {
    id
    owner
    tokenId
  }
}
```
