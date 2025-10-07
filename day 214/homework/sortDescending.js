// ფუნქცია რომელიც ალაგებს მასივს კლებადობით
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([5, 1, 9, 3]));
