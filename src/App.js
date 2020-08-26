import React from 'react';
import SizeContextProvider from './contexts/SizeContext';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <SizeContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </SizeContextProvider>
  );
}

export default App;
