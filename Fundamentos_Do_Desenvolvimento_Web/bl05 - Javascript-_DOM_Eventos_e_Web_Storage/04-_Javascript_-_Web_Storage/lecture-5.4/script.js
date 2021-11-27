// https://www.w3schools.com/js/js_cookies.asp

let person = {
  firstName: 'Murilo',
  lastName: 'Flesch'
}

localStorage.setItem('dado1', JSON.stringify(person));
localStorage.setItem('dado2', JSON.stringify(person));

localStorage.removeItem('dado2');

let obj = JSON.parse(localStorage.getItem('dado1')); 
obj.firstName = "Eduardo";

localStorage.setItem('dado1', JSON.stringify(obj));
localStorage.setItem('dado1', '');

console.log(  obj.firstName  );

