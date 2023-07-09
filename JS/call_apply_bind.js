let userDetails = {
  name: "Uday varshney",
  age: 21,
  designation: "Enginerer",
  // printdetails: function () {
  // console.log(this.name);
  // },
};
let printdetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};
printdetails.call(userDetails, "Aligarh", "India");

// userDetails.printdetails();

userDetails2 = {
  name: "Usha Varshney",
  age: 50,
  designation: "Teacher",
};
// by using this call funciton we dont have to redefine the funciton in the userDetails2.
// this is called funciton borrowing.
// userDetails.printdetails.call(userDetails2);

// call
printdetails.call(userDetails2, "Mumbai", "India");

// apply
printdetails.apply(userDetails2, ["kya pta", "America"]);

// bind it crete copy of a funciton and when we need we can inoke later.
let newfun = printdetails.bind(userDetails, "Aligarh", "India");
newfun();
