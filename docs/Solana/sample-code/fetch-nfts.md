# How to fetch NFTs from a wallet

## With an RPC request 
This will hit rate limits:
```ts
// https://docs.solana.com/developing/clients/jsonrpc-api#gettokenaccountsbyowner
import axios from "axios";

async function getTokenAccounts(address: string) {
  try {
    return new Promise(async (resolve, reject) => {
      let data = {
        jsonrpc: "2.0",
        id: 1,
        method: "getProgramAccounts",
        params: [
          // This is the pubkey for the Solana token program, do not replace this.
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          { encoding: "jsonParsed",
            filters: [
              { dataSize: 165 },
              { memcmp: { "offset": 32, "bytes": address } }
            ]
          }
        ]
      }
      await axios.post("https://api.mainnet-beta.solana.com", data)
        .then((res) => {
          // console.log(res.data)
          //@ts-ignore
          resolve(res.data.result)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  } catch (e) {
    console.log(e)
  }
}

export default getTokens;
```