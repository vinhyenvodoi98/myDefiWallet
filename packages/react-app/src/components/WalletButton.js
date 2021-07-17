import React from 'react';
import { Button } from 'components';
import useWeb3Modal from 'hooks/useWeb3Modal';

export default function WalletButton() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? 'Connect Wallet' : 'Disconnect Wallet'}
    </Button>
  );
}
