# Gas Issues
## Unpredictable Gas Limit

**What is Gas Limit?**

Gas limit refers to the maximum amount of gas that you're willing to spend on a particular transaction. This error usually happens when you are providing an invalid input when calling a function from your smart contract

**✅ Solutions**

```javascript
// Add a manual gasLimit
await wavePortalContract.wave("hello", { gasLimit: 300000 });

// Add a dynamic gasLimit
const startEstimate = await wavePortalContract.estimateGas.wave("Hello");
const tx = await wavePortalContract.wave("Hello", {
    gasLimit: startEstimate,
});
```