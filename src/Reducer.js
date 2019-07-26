const initialState = [
  { id: '350' }, // LF fastighetsfond
  { id: '899033' }, // danske invest select usd
  { id: '464' }, // handelsbanken hälso
  { id: '206' }, // swedbank robur access mix
  { id: '2111' }, // amf räntefond lång
  { id: '471796' }, // spiltan högreäntefond
  { id: '94867' }, // spiltan realräntefond
  { id: '181108' }, // LF usa indexnära
  { id: '907817' }, // HB Råvaru
  { id: '596635' }, // robur access asien
  { id: '255288' }, // handelsbanken realräntefond
  { id: '321692' }, // dnb finans
  { id: '1933' }, // ny teknink
  { id: '2801' }, // amf aktiefond småbolag
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
