const comicBook1 = {
  collection: "Tio Patinhas",
  title: "O Tesouro dos Dez Avatares",
  address: {
    street: "xyz",
    number: 123,
  },
  wilk: [2, 4, 6, 8],
};

// console.log(comicBook1.collection);

// console.log(comicBook1['title']);

comicBook1.author = "Don Rosa";

comicBook1["publishingCompany"] = "Editora Abril";

const newPublisher = "Panini";

comicBook1.publishingCompany = newPublisher;

// console.log(comicBook1.publishingCompany);

// console.table(comicBook1);

const keysOfObject = Object.keys(comicBook1);

// console.log(keysOfObject.includes('author'));

// console.log(keysOfObject.includes('author'));

const valuesOfObject = Object.values(comicBook1);

// console.log(valuesOfObject);

const entriesOfObject = Object.entries(comicBook1);

console.log(entriesOfObject[2][1]);

// const comicBook2 = {
//   collection: "The Order of the Stick",
//   title: "No Cure for Paladian Blues",
// };

// const authorObject = { author: "Rich Burlew" };

// Object.assign(comicBook2, authorObject);

// console.log(comicBook2);

// authorObject.address = "New Street";

// console.log(comicBook2);

// console.log(authorObject);

// const comicBook3 = Object.assign({}, comicBook1, comicBook2);

// console.log(comicBook3);
