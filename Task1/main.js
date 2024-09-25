"use strict"
//.......................Arrays...................
//..........................1.....................
let array = ["Coding", "Academy", "By", "Orange"];

let arrayWithJordan = [...array, "Jordan"];
console.log(arrayWithJordan);

let firstTwoElements = array.slice(0, 2);
console.log(firstTwoElements);

let arrayWithWelcome = ["Welcome", "To", ...array];
console.log(arrayWithWelcome);

let excludeFirstElement = array.slice(1);
console.log(excludeFirstElement);

let arrayAsString = array.join(" ");
console.log(arrayAsString);

console.log(array);

let codingAndOrange = [array[0], array[array.length - 1]];
console.log(codingAndOrange);
//..........................2.....................

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop(); 
console.log(vegetables); 
//...............
var fruit = ["banana", "apple", "orange", "watermelon"];
fruit.shift(); 
console.log(fruit); 
//.................
var fruit = ["apple", "orange", "watermelon"];
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex,"is index of orange"); 
//.................
var fruit = ["apple", "orange", "watermelon"];
var orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex); 
console.log(fruit); 
//.................
var vegetables = ["carrot", "tomato", "pepper"];
var vegetableLength = vegetables.length;
console.log(vegetableLength,"is length of the vegetable array"); 
//.................
var vegetables = ["carrot", "tomato", "pepper"];
var vegetableLength = vegetables.length;
vegetables.push(vegetableLength); 
console.log(vegetables); 
//.................
var fruit = ["apple", "orange", "watermelon", 1];
var vegetables = ["carrot", "tomato", "pepper", 3];
var food = fruit.concat(vegetables);
console.log(food); 
//.................
var food = ["apple", "orange", "watermelon", 1, "carrot", "tomato", "pepper", 3];
food.splice(4, 2); 
console.log(food); 
//.................
var food = ["apple", "orange", "watermelon", 1, "pepper", 3];
food.reverse();
console.log(food); 
//.................
var food = [3, "pepper", 1, "watermelon", "orange", "apple"];
var foodString = food.join(", ");
console.log(foodString); 
//...........................................................................
//.......................Function............................................
//...........................1...............................................
function splitStringIntoArray(str) {
    return str.split(" ");
}
console.log(splitStringIntoArray("Orange Jordan")); 
//...........................2...............................................
function hidePhoneNumber(phoneNumber) {
    return phoneNumber.slice(0, 7).replace(/\d/g, '*') + phoneNumber.slice(7);
}
console.log(hidePhoneNumber("0776807777")); 
//...........................3...............................................
function hideEmail(email) {
    let [local, domain] = email.split("@");
    return local.slice(0, 6) + '…@' + domain;
}
console.log(hideEmail("orange_academy@orange.jo")); 
//............................4..............................................
function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstWord("coding academy by orange")); 
//............................5..............................................
function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeEachWord("coding academy by orange")); 
//............................6..............................................
function flipNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(flipNumber(92485)); 
//............................7..............................................
function swapWithDestructuring(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

let a = 3;
let b = 4;
[a, b] = swapWithDestructuring(a, b);
console.log("After swap: a =", a, ", b =", b);

//.............................8.............................................
function removeCharacterAt(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}
console.log(removeCharacterAt("Orange", 3)); 
//.............................9..............................................
function mergeWithoutFirstCharacter(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}
console.log(mergeWithoutFirstCharacter("lora", "inge")); 
//.............................10..............................................
function isCharInFirstOrLastPosition(char, str) {
    return str.startsWith(char) || str.endsWith(char);
}
console.log(isCharInFirstOrLastPosition("o", "orange")); 
console.log(isCharInFirstOrLastPosition("z", "orange")); 
//..............................11.............................................
function wordsToArray(str) {
    return str.split(" ");
}
console.log(wordsToArray("Coding Academy by Orange")); 
//...............................12.............................................
function sortCharacters(str) {
    return str.split("").sort().join("");
}
console.log(sortCharacters("Orange")); 






