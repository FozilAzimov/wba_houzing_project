import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducer';

export const PropertiesContext = createContext();

export default function PropertiesProvider ({ children }) {

  const [state, dispatch] = useReducer(reducer, {});

  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  )
}
