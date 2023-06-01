const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail("uday@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.res.inverse(res));
console.log(res);
