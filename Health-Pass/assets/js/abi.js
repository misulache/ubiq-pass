const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "UserStore",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "name",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "isSick",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "feelsSick",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isDoctor",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "verified",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "trustedDoctor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "close",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFeelsSick",
		"outputs": [
			{
				"internalType": "bool",
				"name": "feelsSick",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIsDoctor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isDoctor",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIsSick",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isSick",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTrustedDoctor",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isInitialized",
		"outputs": [
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isVerified",
		"outputs": [
			{
				"internalType": "bool",
				"name": "verified",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_name",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "_isDoctor",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "_trustedDoctor",
				"type": "address"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_feelsSick",
				"type": "bool"
			}
		],
		"name": "setFeelsSick",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_isSick",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "_sickPatient",
				"type": "address"
			}
		],
		"name": "setIsSick",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_trustedDoctor",
				"type": "address"
			}
		],
		"name": "setTrustedDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Doctor",
				"type": "address"
			}
		],
		"name": "verifyMedical",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
