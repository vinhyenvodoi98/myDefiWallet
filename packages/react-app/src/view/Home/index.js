import React from 'react';
import logo from 'ethereumLogo.png';
import { Button, Image, Input } from 'components';

async function readOnChainData() {
  // const defaultProvider = getDefaultProvider();
  // const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // const tokenBalance = await ceaErc20.balanceOf('0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C');
  // console.log({ tokenBalance: tokenBalance.toString() });
}

export default function Home() {
  return (
    <div>
      <Image src={logo} alt="react-logo" />
      <p>
        Edit <code>packages/react-app/src/App.js</code> and save to reload.
      </p>
      <Input />
      {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does */}
      <Button onClick={() => readOnChainData()}>Read On-Chain Balance</Button>
    </div>
  );
}
