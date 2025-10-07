// Bubble Sort ალგორითმი - ადარებს მომდევნო ელემენტებს და ცვლის მათ ადგილს, თუ მარცხენა მეტი ვიდრე მარჯვენა
// Complexity: O(n²) საშუალო და ცუდი შემთხვევაში, O(n) კარგ შემთხვევაში (თუ უკვე დალაგებულია)

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap ელემენტების ადგილები
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 2, 1]));


