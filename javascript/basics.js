/*---- VARIABLES ----*/

console.log("Himanshi");

// const clgId = 23064
// let clgEmail = "hima@google.com"
// var clgPswd = "0064"
// clgCity = "Delhi"
// let clgState;

// console.log(clgId);
// console.table([clgId, clgEmail, clgPswd, clgCity, clgState])

/*Prefer not to use 'var' because of issue in block and functional scope */


/*---- DATA TYPES -----*/

// "use strict"; // treat all JS code as newer version 

// alert(2+2)  we are using nodejs , not browser    and  always take care of the code readabilty.

// console.log(3+3);

/*To see the documentation in easy way - mdn
  To see the original documentation - tc39.es */

/* SEVERAL DATA TYPES
- number => 2 to the power 53
- bigint for larger numbers
- string => ""
- boolean => true/ false 
- null => standalone value 
- undefined => 
- symbol => unique
- object */

// console.log(typeof undefined);  // = undefined
// console.log(typeof null);   // = object


// *********COMPARISON OF DATATYPES***********

// console.log("2" > 1)
// console.log("02" > 1)
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)   // the reason is that an equality check == and comparisons <,>,<=,>= works differently. Comparisons convert null to a number, treating it as 0. That's why null>=0 is true and null.0 is false.
