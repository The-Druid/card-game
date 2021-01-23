import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Layout } from './Layout.components';
import CardGameBoard from './CardGameBoard';
import Footer from './Footer';
import Points from './ResultInfo';
import ResultInfo from './ResultInfo';

const name = 'Daniel';
 const points1 = 0


 
function App() {
  return (
    
    <>
      <Header welcomeMessage="Hazard" />
     
      
      <Layout>
        <CardGameBoard /> 
      </Layout>
      
      <Footer footP="Daniel Szarszewski" />
      
    </>
  );
  
}

export default App;

