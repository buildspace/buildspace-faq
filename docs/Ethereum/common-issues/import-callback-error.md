# VS Code: File import callback error
**Why is this happening?**
This happens because your smart contract is in a nested folder which can be a problem for VS Code Solidity extension when they're trying to look for a package that you're trying to import from the node_modules.

Normally, if your smart contract is placed in the root folder, VS Code will not throw a file import callback error. Like this

```
├── node_modules
├── contracts
│   ├── **/*.sol
├── scripts
│   ├── **/*.js
├── test
│   ├── **/*.js
├── hardhat.config.js
├── package.json
```

Problems will start occuring if you placed your smart contract in a nested folder. Like this

```
├── frontend
│   ├── public
│   │   ├── **/*.png
│   │   ├── **/*.jpg
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
├── smartcontract
│   ├── node_modules
│   ├── contracts
│   │   ├── **/*.sol
│   ├── scripts
│   │   ├── **/*.js
│   ├── test
│   │   ├── **/*.js
│   ├── hardhat.config.js
│   ├── package.json
```
✅ Solution 
You will need to create a .vscode/settings.json to map your contract's node_modules to the one you're trying to import. Here's an example of it

1. create a folder name `vscode` in your root directory
2. create a file in that folder name `settings.json`
3. In your `settings.json`, your code should look like this

```
"solidity.remappings": [
    "hardhat/=smartcontract/node_modules/hardhat"
    "@openzeppelin/contracts/=smartcontract/node_modules/@openzeppelin/contracts"
]
```

Now, this is how your folder structure will look
```
├── .vscode
│   ├── settings.json
├── frontend
│   ├── public
│   │   ├── **/*.png
│   │   ├── **/*.jpg
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
├── smartcontract
│   ├── node_modules
│   ├── contracts
│   │   ├── **/*.sol
│   ├── scripts
│   │   ├── **/*.js
│   ├── test
│   │   ├── **/*.js
│   ├── hardhat.config.js
│   ├── package.json
```