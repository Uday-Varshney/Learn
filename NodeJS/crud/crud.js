const fs = require("fs");
// fs.mkdirSync("crud");

// to remove the dir
// fs.rmdirSync("crud");

// fs.writeFileSync("crud/crud.txt", "Ye new banai h mene");

// add data to the end
// fs.appendFileSync("crud/crud.txt", "new data dala h");

// fs.renameSync("crud/crud.txt", "crud/nayanaam.txt");

// it removes the file
fs.unlinkSync("crud/nayanaam.txt");
