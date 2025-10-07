// ფუნქცია რომელიც დალაგებს სტრინგს ანბანის მიხედვით
function sortString(str) {
  return str.split('').sort((a, b) => a.localeCompare(b, 'ka')).join('');
}

console.log(sortString("გაბდვზ"));
