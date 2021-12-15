require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain essay hover arctic swift gather'; 
let testAccounts = [
"0x3835d57c8eb437619ea656a813eb7197951b7d51f702ffee1488f0f872a56cc7",
"0xbc3c3ed8ee4723f1d1abee4097a42aca4f59a7f37a4649f96ebd96c1504b4425",
"0x74024cfe84deb649792c0a392c9435c3f8ecd0f6fa2f4ae151f227eb314bf239",
"0xbc26cce28fc47e1bbd7adc15db0d794374f4801debc1de9209e3372a6a9b4232",
"0x2c1f430f99a52cefcef2b2cd1571051f622a66c330dcd4fac65461e6ba566094",
"0x0adbc6c1a1f0ae753545f3042ecf8e207a3a87ccc9cdb2c96e8ccc361f798e90",
"0xb7962bd27c1eca470819d879899a2a610f5f549a2b1c6e7794cc3f3079fc40ba",
"0x65a71ff81ad3d67c96724f3a89c360757f3884e22328866eb643338b95e4d38c",
"0x7de6f71daea4e759eee1bca776f57b2dc924221b67eb0e2fdbe6285029582ebf",
"0xb2e97568cb5c1f9de40d472d879967258445d1c64542a6178fcebddb1ac96d73"
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


