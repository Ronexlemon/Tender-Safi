export const ABI =[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tenderIndex",
        "type": "uint256"
      }
    ],
    "name": "readTenderDetails",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tenderTotals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_companyName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tenderDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_deadlineDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_contactEmail",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_tenderAmount",
        "type": "uint256"
      }
    ],
    "name": "writeTenderDetails",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
  
  
      //const TenderOwnerAddress="0xC0E76e650722c4B60b17ff102Ca22e779a5163B7"
    