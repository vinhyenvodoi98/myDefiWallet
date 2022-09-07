import { useEffect, useState, useCallback } from 'react';
import axiosClient from 'api';
import { NativeBalance } from 'api/apiProvider';
import { network } from 'utlis/network';
export const useGetBalance = () => {
  const [balance, setBalance] = useState('');

  const fetchBalance = useCallback(async (addresses) => {
    if (!!addresses && addresses.length > 0) {
      let data;
      let convertData = [];

      for (const [key] of Object.entries(network)) {
        data = await axiosClient(NativeBalance(key, addresses));
        convertData.push({ network: key, data: data.result });
      }

      setBalance(convertData);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  });

  return [balance, fetchBalance];
};
