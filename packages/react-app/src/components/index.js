import styled from 'styled-components';

export const Header = styled.header`
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const Body = styled.div`
  align-items: center;
  background-color: #e0e0e0;
  color: white;
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
  color: black;
  background: #e0e0e0;
  box-shadow: 17px 17px 33px #bebebe, -17px -17px 33px #ffffff;
`;

export const Button = styled.button`
  border: none;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;
  border-radius: 50px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 17px 17px 33px #bebebe, -17px -17px 33px #ffffff;

  ${(props) => props.hidden && 'hidden'} :focus {
    border: none;
    outline: none;
  }

  &:active {
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow: 17px 17px 33px #bebebe, -17px -17px 33px #ffffff;
    transform: translateY(2px);
  }

  &:hover {
    background: #e0e0e0;
    box-shadow: 17px 17px 33px #bebebe, -17px -17px 33px #ffffff;
  }
`;
