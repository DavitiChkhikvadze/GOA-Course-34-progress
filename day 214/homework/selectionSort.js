// Selection Sort - იპოვის მინიმალურ ელემენტს და მოათავსებს მას მარცხნიდან თანმიმდევრობით
// Complexity: O(n²) ყველა შემთხვევაში, რადგან ყოველთვის შედარებებს აკეთებს ყველა ელემენტზე

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 2, 1]));
