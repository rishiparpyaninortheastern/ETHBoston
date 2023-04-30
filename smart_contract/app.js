// import abi from './ChainHire.json'
const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const dotenv = require('dotenv');

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const infuraUrl = process.env.GOERLI_INFURA_URL;

const provider = new HDWalletProvider(privateKey, infuraUrl);

const web3 = new Web3(provider);

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "company",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        }
      ],
      "name": "addWorkExperience",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidate",
          "type": "address"
        }
      ],
      "name": "getWorkExperience",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "company",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "role",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "start",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "end",
              "type": "uint256"
            }
          ],
          "internalType": "struct ChainHire.WorkExperience[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "workExperiences",
      "outputs": [
        {
          "internalType": "string",
          "name": "company",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "role",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

const contractAddress = '0xf1A8D8838e73d720f4fD11560c41cc2b38328421'; // Replace with your contract's address

const hiringContract = new web3.eth.Contract(contractABI, contractAddress);

document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const role = event.target.elements.role.value;
    const start = event.target.elements.start.value;
    const end = event.target.elements.end.value;
    const consent = event.target.elements.consent.checked;

    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;

    hiringContract.methods.addExperience(name, role, from, to)
        .send({ from: account })
        .on('transactionHash', (hash) => {
            console.log(`Transaction sent: ${hash}`);
        })
        .on('receipt', (receipt) => {
            console.log(`Transaction confirmed: ${receipt.transactionHash}`);
        })
        .on('error', (error) => {
            console.error(`Error: ${error.message}`);
        });
});
