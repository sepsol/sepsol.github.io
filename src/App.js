import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import WIP from './components/WIP';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <WIP/>
      <Footer/>
    </div>
  );
}



export default App;