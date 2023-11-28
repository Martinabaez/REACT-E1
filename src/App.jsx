import { useState } from 'react'
import './App.css'
import { GlobalStyle } from './components/styles/global_styles';
import { Routes } from './routes/Routes';




function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
