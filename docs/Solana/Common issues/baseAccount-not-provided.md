# baseAccount not provided

Why is this happening?

This happens because you did not specify the correct publicKey to the baseAccount field. Another reason why this can happen is probably because you have a typo in your code
✅ Solution Double check your code and ensure that there are no typos in your code. Here's one example of why you might get an error

❌ Code with error
```js
// create an account keypair for our program to use
const baseAcccount = anchor.web3.Keypair.generate();
//call start_stuff_off and pass it the params it needs
const tx = await program.rpc.startStuffOff({
  accounts: {
    baseAcccount: baseAcccount.publicKey,    // This is the typo. It should be baseAccount not baseAcccount
    user: provider.wallet.publicKey,
    SystemProgram: SystemProgram.programId,
  },
  signers: [baseAcccount],
});
```
✅ Fix for this
```js
// create an account keypair for our program to use
const baseAccount = anchor.web3.Keypair.generate();

// //call start_stuff_off and pass it the params it needs
const tx = await program.rpc.startStuffOff({
  accounts: {
    baseAccount: baseAccount.publicKey,    // <====== This is the fix.
    user: provider.wallet.publicKey,
    systemProgram: SystemProgram.programId,
  },
  signers: [baseAccount],
});
```

Author: [CodePerfect](https://twitter.com/helloitsme_sl)
