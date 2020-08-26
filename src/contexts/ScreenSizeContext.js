import React, { createContext } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';

export const ScreenSizeContext = createContext();

function ScreenSizeContextProvider({ children }) {
  const moreThan720 = useMediaQuery('(min-width: 720px)');
  return (
    <ScreenSizeContext.Provider value={{ moreThan720 }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeContextProvider;
