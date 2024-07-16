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

// const food = [];


// foods[0] = 'pizza';
// foods.push('cheeseburger');

// console.log('Exercise 2 result:', foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// Coming back tot this later
let foods = ['pizza','cheesburger','ice cream','tacos'];


foods = ['pizza','cheeseburger','ice cream','tacos'];

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

// const food = ['taco','pizza','ice cram','pasta']

// const favFood = 

// console.log('Exercise 4 result:', favFood);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

const pizzaIndex = foods.indexOf('pizza');

foods.splice(pizzaIndex + 1, 0, 'tofu' );

console.log('Exercise 5 result:', foods);
