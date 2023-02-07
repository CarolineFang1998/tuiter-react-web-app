// alert('Hello World!');

// 2.3 Writing to the Console
console.log('Hello World!');

// 2.4 Variables and Constants
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
                  + functionScoped
                  - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

// 2.4.1 Variable Types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// 2.4.2 Boolean Variables
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// 2.5.1 If Else
console.log('If else');
if(true1) {
    console.log(true);
}

// 2.5.1 If Else
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// 2.5.2 Ternary Conditional Operator
console.log('Ternary conditional operator');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// 2.6.1 Legacy ES5 function
console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// 2.6.2 New ES6 arrow functions
console.log('New ES6 arrow functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// 2.6.3 Implied returns
console.log('Implied return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// 2.6.4 Optional parenthesis and parameters
console.log('Parenthesis and parameters\n')

// 2.6.4 Optional parenthesis and parameters
