"use strict"
//Data Types Task
//.........1..........
let cash = 1000;
let Liabilities = 500;
let cashFlowRatio = cash / Liabilities;
console.log("Cash flow ratio: ", cashFlowRatio); 

let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log("Net income: ", netIncome); 

let liabilities = 1000;
let equity = 500;
let totalAssets = liabilities + equity;
console.log("Total assets: ", totalAssets); 

let profit = 1000;
let sales = 500;
let netIncomeFromMargin = profit * sales;
console.log("Net income (from margin and sales): ", netIncomeFromMargin); 

let numbers = [7, 9, 2];
let average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log("Average: ", average); // 

let price = 150;
let discount = 0.30; 
let discountedPrice = price - (price * discount);
console.log("Discounted price: ", discountedPrice); 

let age = 20;
let isWithinAgeLimit = age > 18 && age < 30;
console.log("Is age within the limit (older than 18 and less than 30): ", isWithinAgeLimit); 

let base = 2;
let exponent = 3;
let exponentialResult = Math.pow(base, exponent);
console.log("Exponential result (2^3): ", exponentialResult); 

let number1 = 10;
let number2 = 3;
let remainder = number1 % number2;
console.log("Remainder of 10 divided by 3: ", remainder); 

//..................................................................................
//.................2.....................
let x = typeof (100);
console.log(x, "Type of 100");

let y = typeof (73.9);
console.log (y, "Type of 73.9");

let m =typeof ("NaN");
console.log (m, "Type of NaN");

let z =typeof ("Water");
console.log (z, 'Type of "Water"');

let q =typeof (10 > 9);
console.log (q, "Type of false");

let w =typeof (9 != 11);
console.log (w, "Type of 9 != 11");

let  i=typeof ("Orang" + "e");
console.log (i, "Type of Orang  +  e");

let  u=typeof (" Orange - s ");
console.log (u, "Type of  Orange - s ");

let result1 = typeof ("4" + "8");
console.log(result1, 'Type of "4" + "8"');

let result2 = typeof ("4" - "8");
console.log(result2, 'Type of "4" - "8"');

let result3 = typeof ("name" + 3);
console.log(result3, 'Type of "name" + 3');

let result4 = typeof ("name" - 3);
console.log(result4, 'Type of "name" - 3');

let result5 = typeof (82 * "word");
console.log(result5, 'Type of 82 * "word"');

let result6 = typeof (1 + "hello");
console.log(result6, 'Type of 1 + "hello"');

let result7 = typeof ("hello" + 1);
console.log(result7, 'Type of "hello" + 1');

let result8 = typeof (1 + true);
console.log(result8, 'Type of 1 + true');

let result9 = typeof ("hello" + true);
console.log(result9, 'Type of "hello" + true');

let result10 = typeof Infinity;
console.log(result10, 'Type of Infinity');

let result11 = typeof (1 == '1');
console.log(result11, 'Type of 1 == "1"');

let result12 = typeof (1 === '1');
console.log(result12, 'Type of 1 === "1"');
//............................................
//String
//.................1................
let str = "Welcome to Orange";

console.log(str.toUpperCase());

console.log(str.substring(8, 10));

console.log(str.replace("Welcome to", "Hello from"));

console.log(str.toLowerCase());

console.log(str.length);

console.log(str.replace("Orange", `"Orange"`));

console.log(str + " Jordan");
//................2.......................
function replaceFirstLetterOccurrences(str) {
    if (str.length === 0) return str; 
    let firstLetter = str[0]; 
    let result = firstLetter + str.slice(1).replaceAll(firstLetter, '*');
    return result;
}

let input = "cactus";
let output = replaceFirstLetterOccurrences(input);
console.log(output);


