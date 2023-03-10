// Our First Conditional Exercise
// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

// Write your code between the two comments in index.js

// You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes

// If num is an even number, print out "even".  Don't do anything if num is an odd number.


function isEven(num) {
    if (num % 2 === 0) {
        console.log('even')
    }
}

// getColor Conditional Exercise
// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre - defined function (something we have not yet covered in the course).   

// Write your code between the two comments in index.js

// You will automatically have access to a variable called phrase.Please do not try and define phrase or change phrase in any way! I will be setting the value of phrase when I test your code.

// Your job is to print out a color based upon the following rules:

// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'

function getColor(phrase) {
    if (phrase === 'stop') {
        console.log('red')
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }
}

// Nested Conditionals Practice
// Time for something a little bit different.I've given you a nested conditional that uses a variable called num.  I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  Leave the conditional alone!

const num = 102;

if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

// Logical AND Mystery Exercise
// I've provided you with a conditional statement that uses a variable called mystery  Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.  Do not change anything other than the value of mystery on line 1!

const mystery = 'Penguin7';

if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}