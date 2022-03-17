import { randomBytes } from 'crypto';
import { Wallet } from '@ethersproject/wallet';
import * as fs from 'fs';

function generateRandomEthereumAddress(): string {
  const id = randomBytes(32).toString('hex');
  const privateKey = '0x' + id;
  const wallet = new Wallet(privateKey);
  return wallet.address;
}

function generateNRandomEthereumWallets(n: number): string {
  let addresses = '';
  for (let i = 0; i < n; i++) {
    if (i % 1000 == 0) {
      console.log(i);
    }
    addresses += `${generateRandomEthereumAddress()}\n`;
  }
  return addresses;
}
const n = parseInt(process.argv[2]);
fs.writeFileSync('addresses.txt', generateNRandomEthereumWallets(n || 10000));
