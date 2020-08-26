import React from 'react';
import ScreenSizeContextProvider from './contexts/ScreenSizeContext';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ScreenSizeContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ScreenSizeContextProvider>
  );
}

export default App;
