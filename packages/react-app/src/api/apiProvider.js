const baseUrl = (network) => {
  return network === 'eth'
    ? process.env.REACT_APP_ETHERSCAN_URL
    : process.env.REACT_APP_BINANCE_URL;
};

const key = (network) => {
  return network === 'eth'
    ? process.env.REACT_APP_ETHERSCAN_KEY
    : process.env.REACT_APP_BINANCE_KEY;
};

export const getListOfERC20 = (network, address) => {
  return `${baseUrl(
    network
  )}/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${key(
    network
  )}`;
};

export const NativeBalance = (network, addresses) => {
  return `${baseUrl(
    network
  )}/api?module=account&action=balancemulti&address=${addresses.toString()}&tag=latest&apikey=${key(
    network
  )}`;
};
