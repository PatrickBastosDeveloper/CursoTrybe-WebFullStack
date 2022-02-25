// ====== Ato I  - Inicializando redux e o estado ======



//    Criar nossa STORE 
//    Adicionar REDUX DEVTOOLS

//    Definir o estado da aplicação
const INITIAL_STATE = {
  theme: 'light'
}



// ====== Ato II  - Lidando com o estado ======

//    Definir as mudanças do estado
//    ACTIONS 
const action = { type: 'CHANGE_THEME' }

//    Definir como o estado será atualizado
//    REDUCER 
const reducer = (state = INITIAL_STATE, action) => { // O estado inicia undefined, mas é possível atribuir diretamente no state
  // console.log(state, action); // estado inicial
  if (action.type === 'CHANGE_THEME')
    return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light'
    };
  return state
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//    Ligar nossa STORE ao Reducer


// ====== Ato III  - Alterando e Lendo o estado ======
const button = document.getElementById( 'light-switch' )
// console.log(button)
button.addEventListener('click', ()=>{
  // console.log('cliquei');
  store.dispatch( action )
})
//    Lendo o estado
//    GETSTATE | SUBSCRIBE
store.subscribe( () => {
  // console.log( 'mudei o estado' );
  const state = store.getState()
  const wrapperElement = document.getElementById( 'wrapper' )
  wrapperElement.className = state.theme
})
//    Disparar as ações que mudarão o estado
//    DISPATCH