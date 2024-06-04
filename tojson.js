const fs = require("fs");

let datacsv = fs.readFileSync("./Data.csv");

let datacsvtostring = datacsv.toString();

// function csvtojson(json){}

let datastringsplit = datacsvtostring.split("\r\n");

const dataarray = [];

let datatitle = datastringsplit[0].split(",");

for (let i = 1; i < datastringsplit.length; i++) {
  let obj = {};

  let datavalue = datastringsplit[i].split(",");

  for (let j = 0; j < datatitle.length; j++) {
    obj[datatitle[j]] = datavalue[j];
  }

  dataarray.push(obj);
}

console.log(dataarray);
