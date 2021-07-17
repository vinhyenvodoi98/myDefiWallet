import React from 'react';

import { Body, Header, Card } from './components';

import Home from 'view/Home';
import WalletButton from 'components/WalletButton';
import Toggle from 'components/Themes/Toggler';
import useWeb3Modal from 'hooks/useWeb3Modal';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/Themes/themes';
import { useDarkMode } from 'hooks/useThemes';

function App() {
  const [provider, address, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <Header>
        {!!address && address.length !== 0 ? (
          <Card>{`${address.slice(0, 8)}...${address.slice(
            address.length - 6,
            address.length
          )}`}</Card>
        ) : (
          <></>
        )}
        <WalletButton
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </Header>
      <Body>
        <Home />
      </Body>
    </ThemeProvider>
  );
}

export default App;
