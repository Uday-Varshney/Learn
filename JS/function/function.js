// Type 1
function add(a, b) {
  console.log(a + b);
}
// Calling a function
add(2, 3);

// Type 2
const add = function (a, b) {
  console.log(a + b);
};
// Calling function
add(2, 3);

// Type 3 arrow funciton
// Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword.
let add = (a, b) => a + b;
console.log(add(3, 2));
const great = (a, b) => {
  if (a > b) return "a is greater";
  else return "b is greater";
};
console.log(great(3, 5));
