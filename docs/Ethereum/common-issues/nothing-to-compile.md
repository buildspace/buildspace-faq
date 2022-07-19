# Hardhat: Nothing to compile
Similar Errors

* Hardhat: Nothing to compile
* Cannot find artifacts for contract from any sources

**Why is this happening?**

This happens because there's a dependency that's not included in the hardhat version.

✅ Solution 
You need to install this dependency to fix this issue. Make sure you're installing it in your smart contract folder. After doing this, you should be able to see it generate an Artifacts folder in your project directory. [Source](https://github.com/NomicFoundation/hardhat/issues/2712)

```
npm install glob@7.2.0
npx hardhat run scripts/run.js
```
