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
  margin: 5rem 0 0 0;
`;

const Wrapper = styled.section`
  margin: 3rem auto 2.7rem auto;
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
            <H1>Fondurval - Global tillgångsallokering</H1>
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
