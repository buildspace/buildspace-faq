# Hardhat is not displaying logs
**Why is this happening?**
This happens because the latest version of hardhat disabled logging by default.

✅ Solution

There are 2 ways to solving this.

Add this to your hardhat config
```js
module.exports = { solidity: '0.8.4', networks: { hardhat: { loggingEnabled: true, }, }, }; 
```

OR

Downgrade your hardhat to 0.9.1 by running `npm install hardhat@0.9.1`