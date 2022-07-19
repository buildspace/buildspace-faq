# Hardhat setup screen doesn't show
**Why is this happening?**

This usually happens when you have accidentally created a `hardhat.config.js` file in your user folder instead of your project folder.

✅ Solution

1. Go to `C:/Users/[YOUR_USERNAME]` and delete `hardhat.config.js`. If there's a `package.json` file, delete it too.
2. Run `npx hardhat` in your project folder to start setup
