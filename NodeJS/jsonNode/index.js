const fs = require("fs");
const bioData = {
  name: "Uday",
  age: 22,
  college: "Gla",
};

// console.log(bioData.age);

// we can't access the values like the about in the below because it's in the json format
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// convert json data into the object data
// const objData = JSON.parse(jsonData);
// console.log(objData);

// make new file and add the json data and convert back to object data;
const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Add to another file");
});

fs.readFile("json1.json", "utf-8", (error, data) => {
  console.log(data);
});
