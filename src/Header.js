import styled from 'styled-components'; 

import "./Header.css"

const MainHeader = styled.header`
  width: 100%;
  text-align: center;
  background-color: green;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
`;


const Header = ({welcomeMessage}) => {
  return (
    <MainHeader>
  {welcomeMessage}
</MainHeader>
  )
}

export default Header;