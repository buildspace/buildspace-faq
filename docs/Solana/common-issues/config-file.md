# Failed to open Solana config file: The system cannot find the path specified (os error 3)

## Why is this happening?

This happens because your solana installation is not creating a cli folder in your system.

## ✅ Solution

1. Run `solana config get`
2. It should show
   ```
   Config File: C:\Users\seanl\.config\solana\cli\config.yml
   RPC URL: https://api.mainnet-beta.solana.com
   WebSocket URL: wss://api.mainnet-beta.solana.com/ (computed)
   Keypair Path: C:\Users\seanl\.config\solana\id.json
   Commitment: confirmed
   ```
3. Navigate to the `Config File` directory shown above like this `C:/Users/seanl/.config/solana/`
4. Check if there's a `cli` or a `install` folder, if it doesn't, you'll need to create it or rename `install` to `cli`
5. Run `sugar create0config`, this should get past the config file not found error.

Author: [CodePerfect](https://twitter.com/helloitsme_sl)
