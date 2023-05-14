import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducer';

const PropertiesContext = createContext();

export default function PropertiesProvider ({ children }) {

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  )
}
