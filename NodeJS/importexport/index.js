// const oper = require("./operator");

// console.log(oper.add(5, 6));
// console.log(oper.sub(15, 10));

// object restructuring kine bhi export ker lo module isme
const { add, sub } = require("./operator");
console.log(add(5, 6));
console.log(sub(15, 10));
