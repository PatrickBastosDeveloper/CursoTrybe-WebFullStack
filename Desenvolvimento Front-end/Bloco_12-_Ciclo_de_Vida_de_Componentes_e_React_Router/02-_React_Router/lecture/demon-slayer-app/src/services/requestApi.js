const getCharacters = data =>
  new Promise((res, rej) => {
    if (data.length) {
      setTimeout(() => {
        res(data);
      }, 1500);
    } else {
      rej(new Error('Não foi dessa vez...'));
    }
  });

export default getCharacters;
