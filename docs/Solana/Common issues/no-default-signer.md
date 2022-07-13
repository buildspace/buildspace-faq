# No default signer found
Why is this happening?

This happens because the you do not have any account set as default to sign the transaction.

✅ Solution 
Run this command in your terminal and this will update your config file to set a default signer for your project.
```
solana config set --keypair ~/.config/solana/devnet.json
```

Author: [CodePerfect](https://twitter.com/helloitsme_sl)
