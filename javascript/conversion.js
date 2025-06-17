// let score = 44
// let score = "44"
let score = "44abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*BASIC CONVERSIONS for Number----
- 44 => 44
- "44abc" => NaN (Not a Number)
- true => 1, false => 0    */


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*BASIC CONVERSIONS for Boolean----
- 1 => true, 0 => false
- "" => false
- "himanshi" => true*/

let someNumber = 40
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof (stringNumber));


// ************** OPERATIONS *****************
let string1 = "hello "
let string2 = "hello"
let string3 = string1 + string2
console.log(string3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Tricky conversions----
console.log(+true);  //=>1
console.log(+"");   //=>0

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
 
