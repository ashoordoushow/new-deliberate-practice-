// console.log('hello');

// Write a program that uses a variable to store a number, then prints that number plus 10.

// var number = 2;
// console.log(number + 10);



// var x = 5
// var y = 10
// console.log(x + y)

// var x = 'hello world'
// console.log(x)

// var x = (6 + 30) * 20
// console.log(x)

// var x = x * 10
// console.log(x)

// const firstName = 'bob'
// const lastName = 'mitchell'
// const fullName = `${firstName} ${lastName}`
// console.log(fullName)














// This package has installed:
// 	•	Node.js v20.17.0 to /usr/local/bin/node
// 	•	npm v10.8.2 to /usr/local/bin/npm
// Make sure that /usr/local/bin is in your $PATH.



// make a variable 

var fruits = ["apple", "pear", "honeydew", "durian"]; // this is an array written in javascript format



//loop through and print out each item in the array
// declare a variable
// write while with condition
// write code in loop
// print inside of loop
// increment variable //write the parenthesis and curly brackets at the beginning when writing a loop

var i = 0;

while (i < fruits.length) {  // this is the while loop in javascript
//   console.log('in the loop');
  console.log(fruits[i]); // this prints out all the fruits in the array
  // i = i + 1; this is the same as the line below
//   i += 1;
  i++; // this is the same as the above two lines. AND IS how you are supposed to type it when using javacript
}
//  THIS IS A GOOD LOOP TO USE BECAUSE YOU CAN USE OTHER TYPES OF FUNCTIONS

fruits.forEach(function(fruit, i) {
//   console.log(i); // you can also print out 'i' in the forEach loop  // this is the the 'forEach' loop and instead of using underscores like ruby (for_each), we use snakeprint for javascript (forEach)
  console.log(fruit); // THIS IS THE LOOP WE'RE GOING TO BE USING THE MOST!
});  // there is no 'end' here like in ruby. the end it this '});'

// for (var i = 0; i < fruits.length; i++) {  // this is the 'for' loop in js script
//   console.log(fruits[i]);} // console.log(i); this prints '0-3', console.log(fruits[i]); this prints each value in the fruits array
// We are not going to be using this loop (old school loop)
// console.log(fruits[0]); // this is how you print in javascript format. typing fruite in the parenthesis prints out the full arrray, you can also put a string in their to print, and to print out a specific item in the array you type the variable + [] and the the location of that value Ex. console.log(fruits[0])



