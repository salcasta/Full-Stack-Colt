/*
Our First Variables Exercise
In index.js, please define TWO variables:

Define a variable called myLuckyNumber and set it equal to 37.

Define a variable called octopusLimbs and set it equal to 8.
*/

let myLuckyNumber = 37;
let octopusLimbs = 8;

/*
Our First Constants Exercise
Let's get some practice defining constants. In index.js, please define the following two variables:

Define a constant called boilingPointC and set it to 100. 

Define a second constant called boilingPointF and set it to 212. 

That's it!
*/

const boilingPointC = 100;
const boilingPointF = 212;

/*
Our First String Variables Practice
Please define the following string variables (you can use either let or const):

bestColor should be set to the string purple (the best color on planet earth, as we all know);

quote should be set to the string You had me at "hello" - be careful about quotation marks, we want double quotes inside the string.
*/

let bestColor = 'purple';
let quote = 'You had me at "hello"';

/*
String Methods Practice
Let's get some practice working with string methods. I've provided you with a variable in index.js called message.  Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed.  You will need to use two string methods that we just covered.  Don't forget you can chain them together on a single line!
*/

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
const whisper = message.trim().toLowerCase();

/*
More String Methods Practice
I've provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard". 

Use a string method to extract the "board" part of "skateboard"(using the slice method)

Replace the "o" in board with an "e"(using the replace method)

Save the result in a variable called facialHair
*/

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
const facialHair = word.slice(5).replace('o', 'e');

/*
String Template Literal Exercise
I've provided you with two variables, die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6.  Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:

die1: 3

die2: 5

roll: "You rolled a 3 and a 5. They sum to 8"

Here is another example with different numbers:

die1: 6

die2: 4,

roll: You rolled a 6 and a 4. They sum to 10"
*/

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;