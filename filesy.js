const fs = require("fs");
// This will create new file in the system.
// fs.writeFileSync("newfile.txt", "new file data writeen in the txt doc.");
fs.writeFileSync("newfile.txt", "Overwritten data in this.");

fs.appendFileSync("newfile.txt", " append on the rigth of the file .");

const buf_data = fs.readFileSync("newfile.txt");
// console.log(buf_data);
console.log(buf_data.toString());
// this is another way to convert bufer data into the other format.
console.log(fs.readFileSync("newfile.txt", "utf8"));

// to rename the file
// fs.renameSync("newfile.txt", "rename.txt");
