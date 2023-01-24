import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AdDesign } from './components/AdDesign';
import { Votes } from './components/Votes';


export function App() {
  //JSX
  return (
    <>
    <Header/>
    <div className= "main">
    <AdDesign/>
    <Votes/>
    </div>
  
    </>
  );
}

export default App;