import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AdDesign } from './components/AdDesign';
import { Votes } from './components/Votes';
import Header from './components/Header';
import { Ad } from './components/Ad';


export function App() {
  //JSX
  return (
    <>
    <Header user = "Chirpus"/>
    <div className= "main">
    <Ad fontSize={40} flavor = "Chocolate"  darkTheme = {true}  />
    <Ad fontSize={40} flavor = "Vanilla"  darkTheme = {true}  />
    <Ad fontSize={40} flavor = "Strawberry"  darkTheme = {true}  />
    <AdDesign/>
    <Votes/>
    </div>
  
    </>
  );
}

export default App;
