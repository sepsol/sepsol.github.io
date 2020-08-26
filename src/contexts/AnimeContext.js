import React, { createContext, Children } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

export const AnimeContext = createContext();

function AnimeContextProvider({ children }) {
  const isSmall = useMediaQuery('(max-width: 720px)');
  return (
    <AnimeContext.Provider value={isSmall}>{children}</AnimeContext.Provider>
  );
}

export default AnimeContextProvider;
