// Insertion Sort - თითოეულ ელემენტს სწორი ადგილის პოვნით სვამს დალაგებულ ნაწილში
// Complexity: O(n²) საშუალო და ცუდი, O(n) კარგი შემთხვევაში (თუ თითქმის დალაგებულია)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 2, 1]));

