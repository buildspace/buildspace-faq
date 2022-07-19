# Miscellaneous issues

## Vulnerabilities when installing hardhat
**Why is this happening?**

This happens because most of the dependencies hardhat used is dependent on other packages that might be vulnerable. You can simply ignore it as you only need hardhat to help you with compiling and deploying your smart contract and will not be needed in your production environment. However, if you want to fix this issue, you're free to submit a PR here [hardhat](https://github.com/NomicFoundation/hardhat).

## Timeout error
**Why is this happening?**
This happens when your contract deployment takes too long to deploy or that your RPC endpoint is not responding

✅ Solution

You will need to recreate a new Alchemy app from the dashboard and update it in your environment variables. 

## error:0308010C:digital envelope routines::unsupported

**Why is this happening?**

This error is usually caused by the library using an unsupported version of Node.

✅ Solution

You need to download Node v16.14.2 from [here](https://nodejs.org/en/download/).

## Failed to deploy editionDrop. Error (!= 200) =403
**Why is this happening?**
There are various reasons why this can happen.

1. You did not initialize your app in your [ThirdWeb Dashboard](https://thirdweb.com/dashboard)
2. Your firewall is blocking access to ThirdWeb's IPFS

✅ Solution You need to initialize your ThirdWebSDK by using cloudflare's IPFS. Special thanks to @piperalpha for this solution.

```js
const sdk = new ThirdwebSDK(wallet, {}, new IpfsStorage("https://cloudflare-ipfs.com/ipfs/"));
```



