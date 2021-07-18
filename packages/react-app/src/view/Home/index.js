import React, { useState, useEffect } from 'react';
import { Button, Row, Input, Card } from 'components';
import axiosClient from 'api';
import { getListOfERC20 } from 'api/apiProvider';
import { Layout, Sider, Content } from 'components/SideBar';
import { useGetBalance } from 'hooks/useGetBalance';

async function readOnChainData(address) {
  const data = await axiosClient(getListOfERC20(address));
  console.log({ data });
  // const defaultProvider = getDefaultProvider();
  // const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // const tokenBalance = await ceaErc20.balanceOf('0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C');
  // console.log({ tokenBalance: tokenBalance.toString() });
}

export default function Home() {
  const [addresses, setAddresses] = useState([]);
  const [text, setText] = useState('');
  const [balance, fetchBalance] = useGetBalance();

  const addAddress = async () => {
    // check is Address
    await setAddresses([...addresses, text]);
    setText('');
  };

  const removeAddress = (address) => {
    setAddresses(addresses.filter((item) => item !== address));
  };

  useEffect(() => {
    const main = async () => {
      fetchBalance(addresses);
    };
    main();
  }, [addresses, fetchBalance]);

  return (
    <Layout>
      <Sider>
        <Card>
          <Row spaceBetween>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Address"
            />
            <Button style={{ margin: '0px' }} onClick={() => addAddress()}>
              Enter
            </Button>
          </Row>
          {addresses.map((address, index) => (
            <Card key={index} style={{ margin: '15px 0px' }} onClick={() => removeAddress(address)}>
              {`${address.slice(0, 8)}...${address.slice(address.length - 6, address.length)}`}
            </Card>
          ))}
        </Card>
      </Sider>
      <Content>
        <Row spaceBetween>
          {!!balance && balance.length > 0 ? (
            balance.map((bal, index) => (
              <Card key={index}>
                <Row>
                  <Card>{bal.network}</Card>
                  {/* <Card>{bal.data}</Card> */}
                  {console.log(bal)}
                </Row>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Content>
    </Layout>
  );
}
