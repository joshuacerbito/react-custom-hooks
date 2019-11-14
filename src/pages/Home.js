import React from 'react';
import { Link } from 'react-router-dom';
import { usePageContext } from '../context/PageContextProvider';

const Home = () => {
  const { pageList } = usePageContext();
  const { groups } = pageList;

  return groups ? (
    <>
      {
        groups.map(({ title, pages }) => (
          <section key={title} className="group">
            <header>
              <h2>{title}</h2>
            </header>
            <article>
              <ul>
                {
                  pages.map(({ name }) => (
                    <li key={name}>
                      <Link to={`/${name}`}>{name}</Link> <code>(/src/components/{name}.js)</code>
                    </li>
                  ))
                }
              </ul>
            </article>
          </section>
        ))
      }
    </>
  ) : 'Loading...';
};

export default Home;
