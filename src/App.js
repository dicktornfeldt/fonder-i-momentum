import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { theme } from './theme/theme';

import appReducer from './Reducer';
import Table from './Table';
import Add from './Add';
import Restart from './Restart';

export const FondContext = React.createContext();

const H1 = styled.h1`
  color: ${props => props.theme.primarycolor};
  font-size: 2.7rem;
  text-align: center;
  margin: 3rem 0 0 0;
  text-transform: uppercase;
  @media (min-width: 600px) {
    margin: 5rem 0 0 0;
  }
  span {
    position: relative;
    top: 0.2rem;
    left: 0.4rem;
  }
`;

const H2 = styled.h2`
  color: #007e9e;
  font-size: 1.4rem;
  text-align: center;
  margin: 0.5rem 0 0 0;
  font-style: italic;
  a {
    color: #007e9e;
  }
`;

const Wrapper = styled.section`
  margin: 4rem auto 2.7rem auto;
  text-align: center;
`;

function App() {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem('data');
    dispatch({ type: 'reset', payload: raw ? JSON.parse(raw) : [] });
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FondContext.Provider value={{ state, dispatch }}>
          <main>
            <H1>
              Fonder i momentum{' '}
              <span aria-label="heart" role="img">
                📈
              </span>
            </H1>
            <H2>
              Den ursprungliga fondlistan kommer från{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/FondSmurfen">
                @FondSmurfen
              </a>{' '}
              på Twitter.
            </H2>
            <Wrapper>
              <Add />
              <Restart />
            </Wrapper>
            <Table />
          </main>
        </FondContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
