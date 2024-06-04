const fs = require("fs");

let datacsv = fs.readFileSync("./Data.csv");

let datacsvtostring = datacsv.toString();

console.log(datacsvtostring);
