import styled from 'styled-components';

export const Header = styled.header`
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background: ${({ theme }) => theme.background};
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const Body = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #61dafb;
  margin-top: 10px;
`;

export const Card = styled.div`
  margin: 0px 20px;
  padding: 12px 24px;
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  font-family: 'Nunito Sans', sans-serif;
  margin: 0px 20px;
  padding: 12px 24px;
  border-radius: 50px;
  background: ${({ theme }) => theme.buttonBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${(props) => props.hidden && 'hidden'} :focus {
    border: none;
    outline: none;
  }

  &:active {
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    transform: translateY(2px);
  }

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

export const Input = styled.input`
  margin: 0px 20px;
  padding: 12px 24px;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
