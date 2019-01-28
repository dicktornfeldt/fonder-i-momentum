const initialState = [
  { id: '350' },
  { id: '899033' },
  { id: '464' },
  { id: '334871' },
  { id: '694253' },
  { id: '2013' },
  { id: '2111' },
  { id: '471796' },
  { id: '94867' },
  { id: '181108' },
  { id: '789175' },
  { id: '666676' },
  { id: '596635' },
  { id: '2008' },
  { id: '1933' },
];

function appReducer(state, action) {
  switch (action.type) {
    case 'reset': {
      return action.payload.length > 0 ? action.payload : initialState;
    }
    case 'restart': {
      return initialState;
    }
    case 'add': {
      return [
        ...state,
        {
          id: action.payload,
        },
      ];
    }
    case 'delete': {
      return state.filter(item => item.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}

export default appReducer;
