const express = require("express");
const app = express();
const port = 8080;
const Web3 = require("web3");
const Contract = require("web3-eth-contract");

const getWeb3 = () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  );
  return web3;
};

const getAccounts = async () => {
  try {
    const accounts = await getWeb3().eth.getAccounts();
    console.log(accounts);
    return accounts;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getGasPrice = async () => {
  try {
    const gasPrice = await getWeb3().eth.getGasPrice();
    console.log(gasPrice);
    return gasPrice;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getBlock = async () => {
  try {
    const blockInfo = await getWeb3().eth.getBlock("latest");
    console.log(blockInfo);
    return blockInfo;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const helloWorld = async () => {
  try {
    const abi = [
      {
        inputs: [],
        name: "renderHelloWorld",
        outputs: [
          {
            internalType: "string",
            name: "greeting",
            type: "string",
          },
        ],
        stateMutability: "pure",
        type: "function",
      },
    ];
    const address = "0x3CEf49CCa90f6b5DC8c1219FDF31e94a2065ab91";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    const result = await contract.methods.renderHelloWorld().call();
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const deploySimpleToken = async () => {
  try {
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "getName",
            type: "string",
          },
          {
            internalType: "string",
            name: "getSymbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "preOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nextOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_allowances",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_personalTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "_tokenLock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_tokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        name: "isTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "lock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_who",
            type: "address",
          },
        ],
        name: "removePersonalTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "removeTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const byteCode =
      "60806040523480156200001157600080fd5b506040516200252d3803806200252d83398181016040528101906200003791906200031d565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160049081620000889190620005ed565b5080600590816200009a9190620005ed565b506012600660006101000a81548160ff021916908360ff1602179055506a52b7d2dcc80cd2e4000000600381905550600354600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600660016101000a81548160ff0219169083151502179055506001600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050620006d4565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001f382620001a8565b810181811067ffffffffffffffff82111715620002155762000214620001b9565b5b80604052505050565b60006200022a6200018a565b9050620002388282620001e8565b919050565b600067ffffffffffffffff8211156200025b576200025a620001b9565b5b6200026682620001a8565b9050602081019050919050565b60005b838110156200029357808201518184015260208101905062000276565b60008484015250505050565b6000620002b6620002b0846200023d565b6200021e565b905082815260208101848484011115620002d557620002d4620001a3565b5b620002e284828562000273565b509392505050565b600082601f8301126200030257620003016200019e565b5b8151620003148482602086016200029f565b91505092915050565b6000806040838503121562000337576200033662000194565b5b600083015167ffffffffffffffff81111562000358576200035762000199565b5b6200036685828601620002ea565b925050602083015167ffffffffffffffff8111156200038a576200038962000199565b5b6200039885828601620002ea565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003f557607f821691505b6020821081036200040b576200040a620003ad565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004757fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000436565b62000481868362000436565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004ce620004c8620004c28462000499565b620004a3565b62000499565b9050919050565b6000819050919050565b620004ea83620004ad565b62000502620004f982620004d5565b84845462000443565b825550505050565b600090565b620005196200050a565b62000526818484620004df565b505050565b5b818110156200054e57620005426000826200050f565b6001810190506200052c565b5050565b601f8211156200059d57620005678162000411565b620005728462000426565b8101602085101562000582578190505b6200059a620005918562000426565b8301826200052b565b50505b505050565b600082821c905092915050565b6000620005c260001984600802620005a2565b1980831691505092915050565b6000620005dd8383620005af565b9150826002028217905092915050565b620005f882620003a2565b67ffffffffffffffff811115620006145762000613620001b9565b5b620006208254620003dc565b6200062d82828562000552565b600060209050601f83116001811462000665576000841562000650578287015190505b6200065c8582620005cf565b865550620006cc565b601f198416620006758662000411565b60005b828110156200069f5784890151825560018201915060208501945060208101905062000678565b86831015620006bf5784890151620006bb601f891682620005af565b8355505b6001600288020188555050505b505050505050565b611e4980620006e46000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806369712ffa116100b8578063b09f12661161007c578063b09f126614610354578063d27ac65b14610372578063d28d8852146103a2578063dd62ed3e146103c0578063f2fde38b146103f0578063f9ca25611461040c57610137565b806369712ffa146102ae57806370a08231146102b85780638da5cb5b146102e857806395d89b4114610306578063a9059cbb1461032457610137565b806323b872dd116100ff57806323b872dd146101f4578063313ce5671461022457806332424aa3146102425780633eaaf86b1461026057806343e204b31461027e57610137565b8063024c2ddd1461013c57806306fdde031461016c578063095ea7b31461018a578063130a39b1146101ba57806318160ddd146101d6575b600080fd5b610156600480360381019061015191906114f9565b61042a565b6040516101639190611552565b60405180910390f35b61017461044f565b60405161018191906115fd565b60405180910390f35b6101a4600480360381019061019f919061164b565b6104e1565b6040516101b191906116a6565b60405180910390f35b6101d460048036038101906101cf91906116c1565b6105fc565b005b6101de610742565b6040516101eb9190611552565b60405180910390f35b61020e600480360381019061020991906116ee565b61074c565b60405161021b91906116a6565b60405180910390f35b61022c6108bc565b604051610239919061175d565b60405180910390f35b61024a6108d3565b604051610257919061175d565b60405180910390f35b6102686108e6565b6040516102759190611552565b60405180910390f35b610298600480360381019061029391906114f9565b6108ec565b6040516102a591906116a6565b60405180910390f35b6102b66109cd565b005b6102d260048036038101906102cd91906116c1565b610a98565b6040516102df9190611552565b60405180910390f35b6102f0610ae1565b6040516102fd9190611787565b60405180910390f35b61030e610b0a565b60405161031b91906115fd565b60405180910390f35b61033e6004803603810190610339919061164b565b610b9c565b60405161034b91906116a6565b60405180910390f35b61035c610c18565b60405161036991906115fd565b60405180910390f35b61038c600480360381019061038791906116c1565b610ca6565b60405161039991906116a6565b60405180910390f35b6103aa610cc6565b6040516103b791906115fd565b60405180910390f35b6103da60048036038101906103d591906114f9565b610d54565b6040516103e79190611552565b60405180910390f35b61040a600480360381019061040591906116c1565b610ddb565b005b610414610fbe565b60405161042191906116a6565b60405180910390f35b6002602052816000526040600020602052806000526040600020600091509150505481565b60606004805461045e906117d1565b80601f016020809104026020016040519081016040528092919081815260200182805461048a906117d1565b80156104d75780601f106104ac576101008083540402835291602001916104d7565b820191906000526020600020905b8154815290600101906020018083116104ba57829003601f168201915b5050505050905090565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156105e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dc9061189a565b60405180910390fd5b6105f133858386610fd1565b600191505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461068a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068190611906565b60405180910390fd5b60011515600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146106e757600080fd5b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600354905090565b600061075984848461119d565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd1398bee19313d6bf672ccb116e51f4a1a947e91c757907f51fbb5b5e56c698f856040516107cd9190611552565b60405180910390a46000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610899576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089090611998565b60405180910390fd5b6108b085338386856108ab91906119e7565b610fd1565b60019150509392505050565b6000600660009054906101000a900460ff16905090565b600660009054906101000a900460ff1681565b60035481565b600060011515600660019054906101000a900460ff1615150361090e57600190505b60011515600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514806109bd575060011515600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b156109c757600190505b92915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5290611906565b60405180910390fd5b60011515600660019054906101000a900460ff16151514610a7b57600080fd5b6000600660016101000a81548160ff021916908315150217905550565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060058054610b19906117d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b45906117d1565b8015610b925780601f10610b6757610100808354040283529160200191610b92565b820191906000526020600020905b815481529060010190602001808311610b7557829003601f168201915b5050505050905090565b6000610ba933848461119d565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c069190611552565b60405180910390a36001905092915050565b60058054610c25906117d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c51906117d1565b8015610c9e5780601f10610c7357610100808354040283529160200191610c9e565b820191906000526020600020905b815481529060010190602001808311610c8157829003601f168201915b505050505081565b60076020528060005260406000206000915054906101000a900460ff1681565b60048054610cd3906117d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610cff906117d1565b8015610d4c5780601f10610d2157610100808354040283529160200191610d4c565b820191906000526020600020905b815481529060010190602001808311610d2f57829003601f168201915b505050505081565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6090611906565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ec157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610efa57600080fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600660019054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611040576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103790611a8d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a690611b1f565b60405180910390fd5b80600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fb3fd5071835887567a0671151121894ddccc2842f1d10bedad13e0d17cace9a7848460405161118f929190611b3f565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361120c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120390611bda565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361127b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127290611c6c565b60405180910390fd5b6000151561128984846108ec565b1515146112cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c290611cfe565b60405180910390fd5b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134990611d90565b60405180910390fd5b611365828261144390919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113fa82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461146a90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b60008282111561145657611455611db0565b5b818361146291906119e7565b905092915050565b60008082846114799190611ddf565b90508381101561148c5761148b611db0565b5b8091505092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114c68261149b565b9050919050565b6114d6816114bb565b81146114e157600080fd5b50565b6000813590506114f3816114cd565b92915050565b600080604083850312156115105761150f611496565b5b600061151e858286016114e4565b925050602061152f858286016114e4565b9150509250929050565b6000819050919050565b61154c81611539565b82525050565b60006020820190506115676000830184611543565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115a757808201518184015260208101905061158c565b60008484015250505050565b6000601f19601f8301169050919050565b60006115cf8261156d565b6115d98185611578565b93506115e9818560208601611589565b6115f2816115b3565b840191505092915050565b6000602082019050818103600083015261161781846115c4565b905092915050565b61162881611539565b811461163357600080fd5b50565b6000813590506116458161161f565b92915050565b6000806040838503121561166257611661611496565b5b6000611670858286016114e4565b925050602061168185828601611636565b9150509250929050565b60008115159050919050565b6116a08161168b565b82525050565b60006020820190506116bb6000830184611697565b92915050565b6000602082840312156116d7576116d6611496565b5b60006116e5848285016114e4565b91505092915050565b60008060006060848603121561170757611706611496565b5b6000611715868287016114e4565b9350506020611726868287016114e4565b925050604061173786828701611636565b9150509250925092565b600060ff82169050919050565b61175781611741565b82525050565b6000602082019050611772600083018461174e565b92915050565b611781816114bb565b82525050565b600060208201905061179c6000830184611778565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117e957607f821691505b6020821081036117fc576117fb6117a2565b5b50919050565b7f45524332303a2054686520616d6f756e7420746f206265207472616e7366657260008201527f72656420657863656564732074686520616d6f756e74206f6620746f6b656e7360208201527f2068656c6420627920746865206f776e65722e00000000000000000000000000604082015250565b6000611884605383611578565b915061188f82611802565b606082019050919050565b600060208201905081810360008301526118b381611877565b9050919050565b7f4f776e657248656c7065723a2063616c6c6572206973206e6f74206f776e6572600082015250565b60006118f0602083611578565b91506118fb826118ba565b602082019050919050565b6000602082019050818103600083015261191f816118e3565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000611982602883611578565b915061198d82611926565b604082019050919050565b600060208201905081810360008301526119b181611975565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119f282611539565b91506119fd83611539565b9250828203905081811115611a1557611a146119b8565b5b92915050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a77602483611578565b9150611a8282611a1b565b604082019050919050565b60006020820190508181036000830152611aa681611a6a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b09602283611578565b9150611b1482611aad565b604082019050919050565b60006020820190508181036000830152611b3881611afc565b9050919050565b6000604082019050611b546000830185611543565b611b616020830184611543565b9392505050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611bc4602583611578565b9150611bcf82611b68565b604082019050919050565b60006020820190508181036000830152611bf381611bb7565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611c56602383611578565b9150611c6182611bfa565b604082019050919050565b60006020820190508181036000830152611c8581611c49565b9050919050565b7f546f6b656e4c6f636b3a20696e76616c696420746f6b656e207472616e73666560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ce8602183611578565b9150611cf382611c8c565b604082019050919050565b60006020820190508181036000830152611d1781611cdb565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611d7a602683611578565b9150611d8582611d1e565b604082019050919050565b60006020820190508181036000830152611da981611d6d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000611dea82611539565b9150611df583611539565b9250828201905080821115611e0d57611e0c6119b8565b5b9291505056fea26469706673582212208f032c7c1919f1ea558ecf955c0e95c4618303ed29e8bed7233b3b932b39d5a564736f6c63430008120033";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi);
    const receipt = await contract
      .deploy({ data: "0x" + byteCode, arguments: ["ErcSimpleToken", "EST"] })
      .send({
        from: "0x8b901172fd6c36aDDF498d02750782a28Be7D1DB",
        gas: 2000000,
        gasPrice: "1000000000000",
      });
    console.log(receipt);
    return receipt;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const removeTokenLock = async () => {
  try {
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "getName",
            type: "string",
          },
          {
            internalType: "string",
            name: "getSymbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "preOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nextOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_allowances",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_personalTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "_tokenLock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_tokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        name: "isTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "lock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_who",
            type: "address",
          },
        ],
        name: "removePersonalTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "removeTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const address = "0xf43dcEA131653136D91D7D82c81E3515599B7693";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    await contract.methods
      .removeTokenLock()
      .call({ from: "0x8b901172fd6c36aDDF498d02750782a28Be7D1DB" });
    return true;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const removePersonalTokenLock = async () => {
  try {
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "getName",
            type: "string",
          },
          {
            internalType: "string",
            name: "getSymbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "preOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nextOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_allowances",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_personalTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "_tokenLock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_tokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        name: "isTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "lock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_who",
            type: "address",
          },
        ],
        name: "removePersonalTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "removeTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const address = "0xf43dcEA131653136D91D7D82c81E3515599B7693";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    await contract.methods
      .removePersonalTokenLock("0x8b901172fd6c36aDDF498d02750782a28Be7D1DB")
      .call({ from: "0x8b901172fd6c36aDDF498d02750782a28Be7D1DB" });
    return true;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const transfer = async () => {
  try {
    const abi = [
      {
        inputs: [
          {
            internalType: "string",
            name: "getName",
            type: "string",
          },
          {
            internalType: "string",
            name: "getSymbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "oldAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "preOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nextOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_allowances",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "_personalTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "_tokenLock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_tokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "_totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
        ],
        name: "isTokenLock",
        outputs: [
          {
            internalType: "bool",
            name: "lock",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_who",
            type: "address",
          },
        ],
        name: "removePersonalTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "removeTokenLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const address = "0xf43dcEA131653136D91D7D82c81E3515599B7693";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    await contract.methods
      .removePersonalTokenLock("0x8b901172fd6c36aDDF498d02750782a28Be7D1DB")
      .call({ from: "0x8b901172fd6c36aDDF498d02750782a28Be7D1DB" });
    const result = await contract.methods
      .transfer("0x6A8Ca1FfF667fDCa8D7C0cb008293fcC6adE10B2", 10000)
      .call({ from: "0x8b901172fd6c36aDDF498d02750782a28Be7D1DB" });
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

app.get("/", (req, res) => {
  getAccounts().then((accounts) => {
    res.send(accounts);
  });
});

app.get("/gasprice", (req, res) => {
  getGasPrice().then((gasPrice) => {
    res.send(gasPrice);
  });
});

app.get("/getblock", (req, res) => {
  getBlock().then((blockInfo) => {
    res.send(blockInfo);
  });
});

app.get("/helloworld", (req, res) => {
  helloWorld().then((result) => {
    res.send(result);
  });
});

app.get("/deploy", (req, res) => {
  deploySimpleToken().then((result) => {
    res.send(result);
  });
});

app.get("/removetokenlock", (req, res) => {
  removeTokenLock().then((result) => {
    res.send(result);
  });
});

app.get("/removepersonaltokenlock", (req, res) => {
  removePersonalTokenLock().then((result) => {
    res.send(result);
  });
});

app.get("/transfer", (req, res) => {
  transfer().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log("Listening...");
});
