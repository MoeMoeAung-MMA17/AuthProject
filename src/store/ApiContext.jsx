import React from "react";
import { createContext } from "react";


export const ApiContext = createContext({
  data: null,
  error: null,
  loading: false,
});

const ApiContextProvider = ({ children }) => {
  

  return (
    <ApiContext.Provider value={{ data, error, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

