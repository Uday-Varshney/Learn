let p = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am resolve");
    resolve(53);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am rejected");
    reject(new Error("rejected"));
  }, 5000);
});

console.log(p);
p.then((value) => {
  console.log(value);
});
p2.catch((Error) => {
  console.log("Err is handeled by the catch");
});
