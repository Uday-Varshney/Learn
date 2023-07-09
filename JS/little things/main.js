// This is how loop works
const cars = ["volov", "chummi", "jaet", "lead"];

// cars.forEach((element) => {
//   console.log(element);
// });

// Date
var date = new Date();
var time = date.toLocaleTimeString();
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

//for in itereates like in key vale pairs
for (x in cars) {
  console.log(cars[x]);
}

// itereates the values
for (let x of cars) {
  console.log(x);
}
