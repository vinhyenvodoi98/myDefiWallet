import { useCallback, useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = 'INVALID_INFURA_KEY';

const NETWORK_NAME = 'mainnet';

function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState();
  const [address, setAddress] = useState('');
  const [autoLoaded, setAutoLoaded] = useState(false);
  const { autoLoad = true, infuraId = INFURA_ID, NETWORK = NETWORK_NAME } = config;

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = new Web3Modal({
    network: NETWORK,
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId
        }
      }
    }
  });

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    const web3 = new Web3(newProvider);

    setProvider(web3);
    let accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);

    // Subscribe to accounts change
    newProvider.on('accountsChanged', async (accounts) => {
      console.log({ accounts });
      setAddress(accounts[0]);
    });

    // Subscribe to chainID change
    newProvider.on('chainChanged', async (chainID) => {
      chainID = parseInt(web3.utils.hexToNumber(chainID));
      console.log(chainID);
    });

    // Subscribe to provider connection
    newProvider.on('connect', (info) => {
      console.log(info);
    });

    // Subscribe to provider disconnection
    newProvider.on('disconnect', (error) => {
      console.log(error);
    });
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function() {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal]
  );

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
  }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

  return [provider, address, loadWeb3Modal, logoutOfWeb3Modal];
}

export default useWeb3Modal;
