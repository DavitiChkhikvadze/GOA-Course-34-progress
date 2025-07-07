//N1 - Be Concise III - Sum Squares
let sumSquares = a => a.reduce((s, x) => s + x * x, 0)

//N2 - Grasshopper - Order of operations
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

//N4 - What's up next?
function nextItem(a, item) {
  let found = false;

  for (let i of a) {
    if (i > (a.length || item + 1)) return;
    
    if (found) {
      return i;
    }
    
    if (i === item) {
      found = true;
      
      if (a.next) {
        return a.next().value;
      }
    }
  }
  
  console.log(a.length);
  return undefined;
}

//N5 - "this" is a problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}