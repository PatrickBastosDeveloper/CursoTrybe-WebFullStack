 const formatDate = ( year, month, day,...rest) => {
  return `${day}/${month}/${year} - ${rest[0]}:${rest[1]}:${rest[2]}`;
};

const dateInfo = ['1981', '7', '31', '22', '47', '12'];
// Saída esperada:  '31/7/1981 - 22:47:12'
//const formattedDate  = formatDate('1981', '7', '31', '22', '47', '12')
const formattedDate  = formatDate(...dateInfo)
console.log(formattedDate) 


