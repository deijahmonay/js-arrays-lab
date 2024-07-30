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
