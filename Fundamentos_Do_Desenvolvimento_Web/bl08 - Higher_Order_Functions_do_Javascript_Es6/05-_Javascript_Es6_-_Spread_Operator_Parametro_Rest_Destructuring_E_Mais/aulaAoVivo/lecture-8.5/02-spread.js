const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// UTILIZANDO FOR
let awesomeBooksFOR = [];

for (let index = 0; index < horrorBooks.length; index += 1) {
  awesomeBooksFOR.push(horrorBooks[index]);
}

for (let index = 0; index < scifiBooks.length; index += 1) {
  awesomeBooksFOR.push(scifiBooks[index]);
}

 //console.log(awesomeBooksFOR);






// UTILIZANDO ForEach
let awesomeBooksForEach = [];

horrorBooks.forEach((horrorBook) => {
  awesomeBooksForEach.push(horrorBook);
})

scifiBooks.forEach((scifiBook) => {
  awesomeBooksForEach.push(scifiBook);
})

// console.log(awesomeBooksForEach)

// UTILIZANDO O SPREAD OPERATOR
const books = [ ...horrorBooks , ...scifiBooks];
console.log(books)