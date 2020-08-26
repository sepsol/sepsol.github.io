import React from 'react';
import AnimeContextProvider from './contexts/AnimeContext';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <AnimeContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AnimeContextProvider>
  );
}

export default App;
