import ethLogo from 'assets/icons/eth.png';
import bscLogo from 'assets/icons/bsc.png';

export const network = {
  1: {
    baseUrl: process.env.REACT_APP_ETHERSCAN_URL,
    scanKey: process.env.REACT_APP_ETHERSCAN_KEY,
    logo: ethLogo
  },
  56: {
    baseUrl: process.env.REACT_APP_BINANCE_URL,
    scanKey: process.env.REACT_APP_BINANCE_KEY,
    logo: bscLogo
  }
};

export function getNetwork(_chainId) {
  return network[_chainId];
}
