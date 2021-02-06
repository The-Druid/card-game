import React from 'react';
import styled from 'styled-components'; 
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultInfo from './ResultInfo';


const MainFooter = styled.footer`
  width: 100%;
  text-align: center;
  background-color: green;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 0;
`;
const Footer = ({footP}) => {
    return (
      
      <MainFooter>
    19113: {footP}
  </MainFooter>
    )
  }

export default Footer;

