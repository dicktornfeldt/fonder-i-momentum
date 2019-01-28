import React, { useContext } from 'react';
import { Button } from './theme/theme';
import { FondContext } from './App';

function Restart() {
  const { dispatch } = useContext(FondContext);
  return (
    <Button danger onClick={() => dispatch({ type: 'restart' })}>
      Återställ fondlista
    </Button>
  );
}
export default React.memo(Restart);
