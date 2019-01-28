import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FondContext } from './App';
import { Button } from './theme/theme';

const Wrapper = styled.div`
  margin: 0 2rem 0 0;
  display: inline-block;
`;

const Input = styled.input`
  border: none;
  padding: 0.8rem;
  &:focus {
    outline: none;
  }
`;

function Add() {
  const { dispatch } = useContext(FondContext);
  const [data, setData] = useState(null);

  return (
    <Wrapper>
      <Input type="text" placeholder="ID hos Avanza" onChange={e => setData(e.target.value)} />
      <Button onClick={() => dispatch({ type: 'add', payload: data })}>Lägg till</Button>
    </Wrapper>
  );
}

export default React.memo(Add);
