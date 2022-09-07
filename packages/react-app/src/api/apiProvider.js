import { getNetwork } from 'utlis/network';

export const getListOfERC20 = (network, address) => {
  let nw = getNetwork(network);
  return `${nw.baseUrl}/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${nw.scanKey}`;
};

export const NativeBalance = (network, addresses) => {
  let nw = getNetwork(network);
  return `${
    nw.baseUrl
  }/api?module=account&action=balancemulti&address=${addresses.toString()}&tag=latest&apikey=${
    nw.scanKey
  }`;
};
