const Redux = require( 'redux' );

const fazerLogin = ( email ) => ( { //função actionCreator: Esta função irá enviar uma action ao nosso reducer
  type: 'LOGIN',
  email
} );

const ESTADO_INICIAL = { 
  login: false,
  email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL,action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
  };
  
const store = Redux.createStore( reducer );
  store.dispatch(fazerLogin('alguem@email.com'))
  console.log(store.getState())
  