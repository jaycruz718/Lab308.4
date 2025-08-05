// Starting String
// let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

//  Variables
 // let cell1 = "";
 // let cell2 = "";
 // let cell3 = "";
 // let cell4 = "";
// let commas = 0; // Counter variable

// Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
  // if (csvStr[i] == ",") {
    // If comma
    // commas++; // Add to comma counter
  // } else if (csvStr[i] == "\n") {
    // If new line
    // console.log(cell1, cell2, cell3, cell4); // print new line

    // Clear previous data for new row
    // commas = 0;
    // cell1 = "";
    // cell2 = "";
    // cell3 = "";
    // cell4 = "";
  // } else {
    // for all chars
    // if (commas == 0) {
      // put in the appropriate cell, based on commas
      // cell1 += csvStr[i];
    //  else if (commas == 1) {
      // cell2 += csvStr[i];
    // } else if (commas == 2) {
   //   cell3 += csvStr[i];
    // } else {
      // cell4 += csvStr[i];
    // }
  // }

  // If last char in string print final cells
  // if (csvStr.length - 1 == i) {
    // console.log(cell1, cell2, cell3, cell4);
  // }
// }

// Part 1: Refactoring Old Code

let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
// console.log(csvData);


// Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// const rows = csvData.split('\n');

// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// const columns = rows[0].split(',').length;

// Store your results in a two-dimensional array.
// let data = [];
// Each row should be its own array, with individual entries for each column.
// for (let i = 0; i < rows.length; i++) {
// Each row should be stored in a parent array, with the heading row located at index 0.
// let row = rows[i].split(',');

// Cache this two-dimensional array in a variable for later use.
  // data.push(row);
// }
// console.log(data);

// Part 3: Transforming Data

// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
let data = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"]
];

console.log(data);
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.




