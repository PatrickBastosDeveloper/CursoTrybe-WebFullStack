const saveLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const readLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export {
  saveLocalStorage,
  readLocalStorage,
}
