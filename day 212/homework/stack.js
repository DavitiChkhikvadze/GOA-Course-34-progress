class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {                
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {                  
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  size() {                   
    return this.items.length;
  }

  clear() {                 
    this.items = [];
  }

  isEmpty() {                
    return this.items.length === 0;
  }

  print() {                  
    return this.items.join(" -> ");
  }
}

const stack = new Stack();

for (let ch of "hello") {
  stack.push(ch);
}
console.log("Stack after push:", stack.print());

while (!stack.isEmpty()) {
  console.log("Popped:", stack.pop());
  console.log("Stack now:", stack.print());
}

function isBalanced(expr) {
  const s = new Stack();
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (let ch of expr) {
    if ("([{".includes(ch)) {
      s.push(ch);
    } else if (")]}".includes(ch)) {
      if (s.isEmpty() || s.pop() !== pairs[ch]) {
        return false;
      }
    }
  }
  return s.isEmpty();
}

console.log(isBalanced("(a+b)"));  
console.log(isBalanced("(a+b]"));  
console.log(isBalanced("{[()]}")); 
console.log(isBalanced("{[(])}")); 
