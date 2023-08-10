// Numbers
console.log(13);
console.log(9.81e8);

// Arithmetic
console.log(100 + 4 * 11);
console.log((100 + 4) * 11);
console.log(1 - 2 + 1);
console.log((1 - 2) + 1);
console.log(144 % 12);
console.log(6 / 2);
console.log(15 & 6);

// Special Numbers
console.log("Special numbers are 'Infinity', '-Infinity' and 'NaN'");

// Strings
console.log("The ocean is about 1km from here");

// Newline character in strings
console.log("This is the first line\nAnd this is the second line");
console.log("A newline character is written like this \'\\n'.");

// String concatenation
console.log("con" + "cat" + "e" + "nate");

// Template Literals
console.log(`Half of 100 is ${100 / 2}`);

// Unary operators
// These are operators that are not symbols
// One example is typeof
console.log(typeof 4.5);
console.log(typeof "x");

// Boolean values
// A value that distinguishes between two possibilities
console.log(3 > 2);
console.log(3 < 2);
console.log("Aardvark" < "Zoroaster");
// In strings, uppercase letters are always less than lowercase letters
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equal to
// != not equal to
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
// The only value in JS that is not equal to itself in NaN
console.log(NaN == NaN);
// NaN is used to denote the result of nonsensical computation, and as such, isn't equal to equal to the reslt of any other nonsensical operator

// Logical Operators
// Operations that can be applied to Boolean values
// JS has 3 logical operators: AND, OR, NOT. These can be used to reason Booleans
// The && is represents logical AND
// It is a logical operator and is only TRUE if both values are true
console.log(true && false);
console.log(true && true);

// The || operator denotes logical OR
// It's result is true if either of the values given to it is true
console.log(false || true);
console.log(false || false);
// NOT is written as !
// It is an unary operator that flips the value that's given to it

// || has the lowest precedence followed by && then the comparison operators(>, == etc)

// Ternary operators
// Written with a question mark and a colon
console.log(true ? 1: 2);
console.log(false ? 1 : 2);
// This is also caled the conditional operator
// The value on the left of the question mark chooese which of the two values will come out
// When its true it picks the first value and when it's false it picks the secnd value

// Empty values
// null and undefined are used to denote the absence of a meaningful value
// They are both values but they carryy no information
// Many operations that do not produce a meaningful value yield undefined

// AUTOMATIC TYPE CONVERSION
// When an operator is applied to the "wrong" type of value, JS will quietly convert that value to the type it needs, using a set of rules that often aren't what you want or expect.
// This is called type coercion.
console.log(8 * null);
// null becomes 0
console.log("5" - 1);
// "5" becomes 5(string to number)
console.log("5" + 1);
// 1 becomes "1"(number to string to have string concatenation)
// the + tries concatenation before numeric addition
console.log("five" * 2);
console.log(false == 0);
// When something doesn't map to a number in an obvious way, (e.g "five" or undefined), you get the value NaN
// When comparing values of the same type using ==, you should get true when both values are the same except in the case of NaN
// When the types differ, JS uses a complicated and confusing set of rules to determine what to do.
// It tries to convert one of the values to the other values' type 
// When null or undefined occurs on either side, it produces true if one of both sides is either null or undefined
console.log(null == undefined);
console.log(null == 0);
// "" == false and 0 == false are true because of automatic type conversion
// When you do not want automatic type conversion you use === or !==
// The first tests whether the two values are precisely equal  and the other if the two values are not precisely equal

// && and || convert the value on the lhs to Boolean in order to decide what to do
// Depending on the operator and the result of that conversion, they will return either the left hand value or the right hand value
// The || operator will return the value on the left when hat can be converted to true and the value on the right otherwise
console.log(null || "user");
console.log("Agnes" || "user");
// We can use this functionality to replace a calue you suspect to be empty
// When converting strings and numbers to Booleans 0, NaN and the empty string "" count as false while all the other values count as true

// The && operates the other way around
// When the value on the left is something that converts to false it returns that value otherwise it returns the value on the right

// A property of these two operators is that the part on the right is only evaluated when necessary
// In the case of true || X, no matter what X is the result will always be true
// In false && X, the result will be false
// This is called short-circuit evaluation

// EXPRESSIONS AND STATEMENTS
// A fragment of code that produces a value is called an expression
// A JS expression corresponds to a sentence while an expression corresponds to an expression
// Statements end in a ;

// BINDINGS
// To holld values JS does binding
let caught = 5 * 5;
console.log(caught);
let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let newBinding;
console.log(newBinding);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello";
console.log(greeting + name);

// FUNCTIONS
// A function is a piece of program wrapped in a value
// Executing a function is called invoking, calling or applying it
// Values given to programs are called arguments
// Functions can have a side effect(such as printing to the screen) or produce a value(a return value)

// Control Flow
// Statements are executed from top to bottom in a program
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// Conditional Execution
// Created with the if keyword
if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of" + theNumber * theNumber);
}
// if you enter anything thats not a number no output is shown

if(!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of" + theNumber * theNumber);
} else {
    console.log("Hey. Why dont you give me a number");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
    console.log("Small");
} else if(num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// WHILE & DO LOOPS
// Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state
let number = 0;
while(number <= 12) {
    console.log(number);
    number = number + 2;
}
