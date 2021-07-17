const ETHERSCAN = 'https://api.etherscan.io/api?';

export const getListOfERC20 = (address) => {
  return `${ETHERSCAN}module=account&action=tokentx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${process.env.REACT_APP_ETHERSCAN}`;
};
