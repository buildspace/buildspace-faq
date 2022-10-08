# Failed to read keypair file. The system cannot find the file specified (os error 2)

## Why is this happening?

This happens because you did not create an account or that your system currently does not contain any keypair for Solana to use it to deploy the contract.

## ✅ Solution

1. Run `solana-keygen new`
2. This should create a new solana keypair and you should be able to deploy the contract or interact with the Solana blockchain

Author: [CodePerfect](https://twitter.com/helloitsme_sl)
