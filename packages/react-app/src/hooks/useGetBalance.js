import { useEffect, useState, useCallback } from 'react';
import axiosClient from 'api';
import { NativeBalance } from 'api/apiProvider';
export const useGetBalance = () => {
  const [balance, setBalance] = useState('');

  const fetchBalance = useCallback(async (addresses) => {
    if (!!addresses && addresses.length > 0) {
      let data;
      let convertData = [];
      data = await axiosClient(NativeBalance('eth', addresses));
      convertData.push({ network: 'eth', data: data.result });

      data = await axiosClient(NativeBalance('bsc', addresses));
      convertData.push({ network: 'bsc', data: data.result });
      setBalance(convertData);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  });

  return [balance, fetchBalance];
};
