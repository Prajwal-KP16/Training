// class StackImpl {
//   constructor() {
//     this.stack = {};
//     this.topEle = 0;
//   }

//   push(x) {
//     this.stack[this.topEle] = x;
//     this.topEle++;
//   }

//   top() {
//     if (this.isEmpty()) return "empty stack";
//     return this.stack[this.topEle];
//   }

//   pop() {
//     if (this.isEmpty()) return "empty stack";
//     this.topELe--;
//     const popped = this.stack[this.topEle];
//     delete this.stack[this.topEle - 1];
//     return popped;
//   }

//   isEmpty() {
//     return this.topEle === 0;
//   }

//   size() {
//     return this.topEle + 1;
//   }

//   print() {
//     const result = "";
//     for (let i = 0; i < this.topEle; i++) {
//       result += this.stack[i] + " ";
//     }
//     console.log(result.trim());
//   }
// }

class StackImpl {
  constructor() {
    this.items = [];
  }

  push(x) {
    return this.items.push(x);
  }

  pop() {
    if (this.items.length === 0) return "Stack is Empty";
    return this.items.pop();
  }

  top() {
    if (this.items.length === 0) return "Stack is Empty";
    return this.items[this.items.length - 1];
  }

  print() {
    console.log(this.items.join(" "));
  }
}
const st = new StackImpl();
st.push(4);
st.push(3);
st.push(2);
st.push(1);
st.print();
st.pop();
st.print();
st.pop();
st.print();
st.pop();
st.print();
