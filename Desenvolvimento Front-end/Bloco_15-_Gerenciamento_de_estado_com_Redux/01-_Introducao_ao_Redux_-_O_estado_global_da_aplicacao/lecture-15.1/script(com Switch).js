const INITIAL_STATE = {
  theme: 'light',
  user: {
    name: '',
    email: '',
  },
};

const action = { type: 'CHANGE_THEME' };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'ADD_USER':
      return {
        ...state,
        user: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const button = document.getElementById('light-switch');
button.addEventListener('click', () => {
  console.log('cliquei');
  store.dispatch({ type: 'CHANGE_THEME' });
});

store.subscribe(() => {
  const state = store.getState();
  const wrapperEl = document.getElementById('wrapper');
  wrapperEl.className = state.theme;
});
