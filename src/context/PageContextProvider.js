import React, { createContext, useContext } from 'react';

const pageList = require('./pageList.json');

const PageContext = createContext(pageList);

const PageContextProvider = ({ children }) => (
  <PageContext.Provider value={{ pageList }}>
    {children}
  </PageContext.Provider>
);

export const usePageContext = () => useContext(PageContext);
export default PageContextProvider;