//read data from text file
var fs = require('fs');
var data = fs.readFileSync('weather.dat', "utf8");
console.log(data);


//split data into lines
var lines = data.split("\n");

//split lines into columns
var lines = lines.map(line => line.split(/\s+/));

//remove the first two lines
lines.splice(0,2);

//remove the last line
lines.splice(lines.length-1,1);

//remove the last column
lines = lines.map(line => line.splice(0,3));

//remove the first column
lines = lines.map(line => line.splice(1,2));

//convert first column to numbers
lines = lines.map(line => line.map(column => Number(column)));

//find the smallest temperature spread
var smallestSpread = Number.MAX_VALUE;
var smallestSpreadDay = 0;
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var spread = line[1] - line[0];
    if (spread < smallestSpread) {
        smallestSpread = spread;
        smallestSpreadDay = i+1;
    }
}

//output the smallest temperature spread
console.log("Day with smallest temperature spread: " + smallestSpreadDay);

var smallSpread = "Day with smallest temperature spread: " + smallestSpreadDay;

//export default smallSpread; 