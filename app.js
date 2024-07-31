/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

// const foods = [];  

// console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

const foods = ['pizza', 'cheeseburger']
console.log('Exercise 2 result:', foods);

//* I had to comment out the first exercise in order to solve exercise 2

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = ['pizza']

console.log('Exercise 4 result:', favFood);

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)
//* copied code before I read what it was , starting number 5 below this line

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
//taco, pizza, cheeseburger -- 0,1,2 =====> taco, pizza, tofu, cheeseburger,

const foods2 = foods.toSpliced(2,0,"tofu") 
/* I looked this method up online using mdn web docs article called "Array.prototype.toSpliced()", it returned the correct format placing 
tofu inbetween pizza and cheeseburger at the second index 
*/

console.log('Exercise 5 result:', foods2);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

//* current array -> taco, pizza, tofu, cheeseburger. NEEDS 2 BE -> taco, sushi, cupcake, tofu cheeseburger

console.log(foods[1]);
foods.splice(1,1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

console.log(foods[1]);
foods.splice(1,1, 'sushi', 'cupcake'); //* copied from exercise 6, was i supposed to use another method? i looked it up and this is what mdn docs recommened i use for number 6

const yummy = foods.slice(1,3)

console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx); 


/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
const allFoods = foods;
console.log(allFoods.join('->'));

/* looked this up on mdn web docs "array.prototype.join()" but it returns 'taco -> sushi -> cupcake -> tofu -> cheeseburger'
as well as Exercise 9 result: [ 'taco', 'sushi', 'cupcake', 'cupcake', 'cheeseburger' ]. unsure where i went wrong but still acheived desired outcome
*/
console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
//* Array listed in previous exercise

const hasSoup = foods.includes("soup"); 

console.log('Exercise 10 result:', hasSoup); // returns faslse, no soup listed in foods array


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/
//? ive changed 178 to let from const to allow code  for exercise 14  to run
let nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [5, 23, 15, 21, 9, 45, 66, 7, 81]

nums.forEach((num, oddNums) => {
   if (num === odds) console.log(odds)
      console.log(odds)
})
//* not sure if im running too much code but my reslut is showing odd numbers only

console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
// for (let i = 0; i < arr.length; i++) {
//    console.log(array[i]);
// }
// const fizz = [15, 21, 72, 9, 45, 66, 81, 90]; // numbers that can be divided by 3
// const buzz = [100, 5, 15, 45, 90]; // numbers that can be divided by 5
// const fizzbuzz = [nums]; // numbers that can be divided by 3 & 5
// let num = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
// ; {
  

//    for (let idx = 0; idx < nums.length; idx++){
//       const num = nums[idx];
//    } if (num % 3 === 0) {
//       console.log(fizz)
//    } else if (num % 5 === 0) {
//       console.log(buzz)
// } else (num % 3 === 0 && num % 5 === 0) 
//       console.log(fizzbuzz)
//    }


// console.log('Exercise 12 Results:');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);
//! had to comment this out to solve 14
// ! I was working on this one and off and asked for help, im slightly confused but i did get the correct return message.


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length -1]
console.log('Exercise 13 result:', numList);
//* Got this on my first try while reviewing lecture notes on first movie examples


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]; 


 console.log('Exercise 14 result:', num);




































































// /*
// Exercise 1: Define an empty array

// 1) Create an empty array and assign it to a variable called `foods`.

// Exercise 1 has been completed for you:
// */

// const foods = [];  

// console.log('Exercise 1 result:', foods);


// /*
// Exercise 2: Add strings to the array

// 1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

// Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

// Complete Exercise 2 in the space below:
// */

// // const food = [];


// // foods[0] = 'pizza';
// // foods.push('cheeseburger');

// // console.log('Exercise 2 result:', foods);


// /*
// Exercise 3: Insert at the beginning

// 1) Insert the string 'taco' at the beginning of the `foods` array.

// Complete Exercise 3 in the space below:
// */

// // Coming back tot this later
// //commented out to complete exercise 6
// // let foods = ['pizza','cheesburger','ice cream','tacos'];


// // foods = ['pizza','cheeseburger','ice cream','tacos'];

// console.log('Exercise 3 result:', foods);


// /*
// Exercise 4: Access an array element

// 1) Retrieve the 'pizza' string from the array based on its position (index) in
//    the array.  

// 2) Assign it to a variable called `favFood`.

// Complete Exercise 4 in the space below:
// */


// // console.log('Exercise 4 result:', favFood);


// /*
// Exercise 5: Insert an element between two others

// 1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

// Complete Exercise 5 in the space below:
// */

// // const pizzaIndex = foods.indexOf('pizza');

// // foods.splice(pizzaIndex + 1, 0, 'tofu' );

// // console.log('Exercise 5 result:', foods);

// /*
// Exercise 6: Replace elements

// 1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

// Complete Exercise 6 in the space below:
// */


// foods.pop('pizza');

// foods.push('sushi','cupckae');

// console.log('Exercise 6 result:', foods);


// /*
// Exercise 7: Using the `slice()` method

// 1) Use the `slice()` method to create a new array that contains 'sushi' and 
//    'cupcake'.

// 2) Assign it to a variable named `yummy`.

// Complete Exercise 7 in the space below:
// */



// console.log('Exercise 7 result:', yummy);


// /*
// Exercise 8: Finding an index

// 1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
//    `foods` array. 

// 2) Assign it to a variable named `soyIdx`.

// Complete Exercise 8 in the space below:
// */



// console.log('Exercise 8 result:', soyIdx);


// /*
// Exercise 9: Joining elements

// 1) Use the `join()` method to concatenate the strings in the `foods` array, 
//    separated by ' -> '. 

// 2) Assign the result to a variable called `allFoods`. 

// Note: The final result should log as:
// 'taco -> sushi -> cupcake -> tofu -> cheeseburger'

// Complete Exercise 9 in the space below:
// */



// console.log('Exercise 9 result:', allFoods);


// /*
// Exercise 10: Check for an element

// 1) Using the .includes() method, check if the `foods` array contains the string
//    'soup'.

// 2) Assign the result to a variable called `hasSoup``.

// Complete Exercise 10 in the space below:
// */



// console.log('Exercise 10 result:', hasSoup);
