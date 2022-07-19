# Unrecognized Signer Source for Anchor Build
The error you are seeing

```
error: Invalid value for '--program-id <PROGRAM_ID>': unrecognized signer source
There was a problem deploying: Output { status: ExitStatus(ExitStatus(256)), stdout: "", stderr: "" }.
```
Why is this happening?

This happens because the path of your project contains spaces.

✅ Solution 
Either replace those spaces with some character or delete them.

❌ Misguided Fix 
If you append `--program-id <your-program-id>` to the command, deploy will "succeed" but then on Solana Explorer no contract is found.

Author: [CodePerfect](https://twitter.com/helloitsme_sl)