import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PageContextProvider, { usePageContext } from './context/PageContextProvider';
import Home from './pages/Home';

import './styles.scss';

const App = () => {
  const { groups } = usePageContext();
  const pages = groups.map(group => group.pages).flat();

  return (
    <PageContextProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        {
          pages.map(({ name, component }) => (
            <Route
              key={name}
              path={`/${name}`}
              component={require(`./components/${component}`).default}
              exact
            />
          ))
        }
      </BrowserRouter>
    </PageContextProvider>
  )
};

render(<App />, document.getElementById('root'));