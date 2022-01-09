require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name remember random coast grace fork symptom gather'; 
let testAccounts = [
"0xd018c258054a457090b03620cf9ea26bc5243e9798b54dafcc409d78c44fba84",
"0x8727b8a9fbc87818e6995e888a2086582737228f20ecd1448f2df47efa15c3e2",
"0x7070360b50c96a7f714f0e8659b6be742e2a566088591d7390f6e98c01bbd70e",
"0xd52ec26a49323082dd77fc2d137b0686b3c820553abb9dddbb4f8d694bb27e0c",
"0xfa49b695180da0b499120caec93d8acbf7cb8d78db952a32d66e6d8c1fda921c",
"0xf829a90140a816d6a2fecb200132683166dbbea64f15494db06b61a3d4db2209",
"0xce7b7e04cd8ccc9a4b805304bec4c648697ec25ad113e56f4f2c8b0510dc7ff7",
"0xd64c72ce385b9265d23f3b46b19a9311d7a5fa7889dd72ab4c5aaddb64ff4187",
"0x7caf8ec2d9d3e3afcc0da6a164c6d6462fa5831412d764808216fac4b3d4551f",
"0x201221ed7b088d48ce93465252509992e3ce00f849d900ce5f77c5ba222dbea6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


