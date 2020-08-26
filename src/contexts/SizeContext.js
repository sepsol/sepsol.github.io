import React, { createContext } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

export const SizeContext = createContext();

function SizeContextProvider({ children }) {
  const moreThan720 = useMediaQuery('(min-width: 720px)');
  return (
    <SizeContext.Provider value={{ moreThan720 }}>
      {children}
    </SizeContext.Provider>
  );
}

export default SizeContextProvider;
