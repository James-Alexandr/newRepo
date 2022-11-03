
//read data from text file
var fs = require('fs');
var data = fs.readFileSync('football.dat', "utf8");
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
lines = lines.map(line => line.splice(0,8));

//remove the first column
lines = lines.map(line => line.splice(1,7));

//convert first column to numbers
lines = lines.map(line => line.map(column => Number(column)));

//find the smallest difference in ‘for’ and ‘against’ goals
var smallestDifference = Number.MAX_VALUE;
var smallestDifferenceTeam = 0;
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var difference = line[5] - line[6];
    if (difference < smallestDifference) {
        smallestDifference = difference;
        smallestDifferenceTeam = i+1;
    }
}

//output the smallest difference in ‘for’ and ‘against’ goals
console.log("Team with smallest difference in ‘for’ and ‘against’ goals: " + smallestDifferenceTeam);
 
var smallestDifference = "Team with smallest difference in ‘for’ and ‘against’ goals: " + smallestDifferenceTeam;

//export default smallestDifference;