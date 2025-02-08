# JavaScript Basics

This repository contains JavaScript code snippets with explanations covering essential concepts such as console operations, variable declarations, data types, conditionals, loops, functions, arrays, objects, and the `this` keyword.

## Console, Alert, and Prompt

```js
console.log("To print a message");
console.warn("To print a warning");
console.error("To print an error");

alert("To print a message as an alert");

prompt("To print a message and take input");
var input = prompt("Enter your name");
console.log(input);
```
*The `console.log` method prints a message to the console, mainly used for debugging. The `console.warn` method logs a warning message, and `console.error` logs an error message. The `alert` method displays a pop-up alert box to the user. The `prompt` function both displays a message and takes user input, which is stored in the `input` variable and then logged to the console.*

## Variable Declaration & Initialization

```js
var a = 10;
var b = 20;
console.log(a + b);

let x = 30;
let y = 40;
console.log(x + y);

const amount = 2000; // amount will not change
var discount = 10;
console.log((2000 / discount) * 100 - amount);
var discount = 25;
console.log((2000 / discount) * 100 - amount);
```
*Variables in JavaScript can be declared using `var`, `let`, or `const`. The `var` keyword allows redeclaration, whereas `let` does not. `const` prevents reassignment.*

## Data Types

### Primitive Types:
- A character is a single letter like `'a'`.
- A string is a sequence of characters, like `"Javascript"`.
- A number can be an integer or a floating-point value, such as `12` or `12.45`.
- A boolean represents true or false values.
- `null` represents the intentional absence of any object value.
- `undefined` indicates a variable has been declared but has not been assigned a value.

### Reference Types:
- Arrays (`[]`) store multiple values.
- Objects (`{}`) store key-value pairs.
- Functions (`()`) define executable code blocks.

## Assigning Variables

```js
var c = 10;
var d = c;
console.log(`c=${c}, d=${d}`);

c -= 1;
console.log(`c=${c}, d=${d}`);
```
*Primitive data types are copied by value. When `c` is assigned to `d`, `d` gets the value of `c`. Changing `c` later does not affect `d`.*

```js
var e = [1, 2, 3, 4, 5];
var f = e;
console.log(`e=[${e}], f=[${f}]`);

e.pop();
console.log(`e=[${e}], f=[${f}]`);
```
*Reference data types, like arrays, are assigned by reference. When `f` is assigned to `e`, both refer to the same memory location, so changes to `e` also affect `f`.*

## Spread Operator

```js
var g = ['a', 'b', 'c', 'd', 'e'];
var h = [...g];
console.log(`g=[${g}], h=[${h}]`);

g.pop();
console.log(`g=[${g}], h=[${h}]`);

h.push('f');
console.log(`g=[${g}], h=[${h}]`);
```
*The spread operator (`...`) creates a new copy of an array instead of referencing the original one. This prevents unintended modifications to the original array.*

## Conditionals

```js
if (true) {
    console.log("This will always execute");
}
```
*A single `if` block executes when the condition is `true`.*

```js
if (0) console.log("false");
else console.log("true");
```
*The `if` statement checks conditions. Since `0` is falsy, the `else` block executes.*

```js
if (0) console.log("false");
else if (1) console.log("true");
else console.log("false");
```
*The `else if` statement checks multiple conditions sequentially. Since `0` is falsy, it moves to `else if (1)`, which is truthy, so "true" is logged.*

```js
var a = 1;
var b = a ? "true" : "false";
console.log(b);
```
*The ternary operator (`condition ? trueCase : falseCase`) simplifies `if-else` statements. Here, since `a` is truthy, `b` is assigned "true".*

## Loops

```js
for (var i = 1; i < 6; i++) {
    console.log(i);
}
```
*The `for` loop runs a block of code multiple times, incrementing `i` in each iteration.*

```js
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```
*The `while` loop continues running as long as the condition is true.*

## Functions

```js
function func() {
    var a = 10, b = 20;
    console.log(a + b);
}
func();
```
*A function is defined using the `function` keyword and is executed when called.*

```js
var expression = function() {
    var a = 20;
    console.log(a);
};
console.log(expression);
```
*A function expression stores a function inside a variable.*

## Arrays

```js
var real_number = [1, 2, 3, 4, 5, 6];
console.log(real_number[0]);
console.log(real_number[100]); // undefined
```
*Arrays store ordered elements accessible via index. An out-of-bounds index returns `undefined`.*

## Objects

```js
var users = ['Saketh', 'Harshith', 'Arjun'];

var Saketh = {
    username: "saketh1",
    email: "saketh@gmail.com",
    password: "mailPassword2"
};
```
*Objects store key-value pairs, making it easier to organize related data. Each property is a key with an associated value.*

## Call, Apply, and Bind Functions

```js
function val(a, b) {
    console.log(this, `${a}, ${b}`);
}
val.call(); // window
val.call('val', 10, 20); // 'val' (string)
```
*The `call` method allows us to invoke a function with a specified value for `this` and arguments passed separately.*

```js
function val2(a, b) {
    console.log(this, a + b);
}
val2.apply('val', [2, 5]);
```
*The `apply` method is similar to `call`, but it requires arguments to be passed as an array.*

```js
function val3(a, b) {
    console.log(this, `${a}, ${b}`);
}
const nfunc = val3.bind('value', 10, 20);
nfunc();
```
*The `bind` method returns a new function with a specified `this` value and arguments but does not immediately execute it.*

## The `this` Keyword

```js
console.log(this); // Global scope, refers to 'window' object
```

```js
function ThisValue() {
    console.log(this); // In a function, 'this' refers to 'window'
}
ThisValue();
```

```js
var obj1 = {
    name: "john",
    ThisValue: function() {
        console.log(this); // Refers to 'obj1'
        console.log(this.name); // Accesses 'name' property
    }
};
obj1.ThisValue();
```

## Constructor & Prototypal Inheritance

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.logUserDetails = function() {
    console.log(this.name, this.age);
};
var user1 = new User("Saketh", 10);
var user2 = new User("Arjun", 20);
```
*Prototypal inheritance allows sharing functions across instances, saving memory by avoiding duplication.*

## Closures

```js
function parent() {
    var num1 = 20;
    var num2 = 40;
    return function() {
        console.log(`${num1}, ${num2}`);
    };
}
var func = parent();
func();
```
*A closure allows a function to remember variables from its parent scope even after the parent function has executed.*


## Event Delegation & Event Bubbling

### Event Delegation
```js
document.querySelector('.main').addEventListener("click", function(details){
    if (details.target.id=='ele1') console.log("Frontend");
    else if (details.target.id=='ele2') console.log("Domination");
});
```
*A single event listener is attached to a parent element to handle events from child elements.*

### Event Bubbling
```js
document.querySelector('#ele1').addEventListener("click",()=>{
    console.log('heading clicked');
});
document.querySelector('body').addEventListener("click",()=>{
    console.log('body clicked');
});
```
*An event on a child element propagates up the DOM tree, triggering event listeners attached to ancestor elements.*

## Higher-Order Functions

```js
function parent(child){
    console.log("Parent Function");
    child();
}
parent(function(){
    console.log('Child Function')
});
```
*A function that takes another function as an argument is called a higher-order function.*

```js
function abcd(){
    return function(){
        console.log("Inner Function");
    }
}
var innerFunction=abcd();
innerFunction();
```
*A function that returns another function is also a higher-order function.*

## Error Handling (try-catch)

```js
function divide(a, b){
    try{
        if(b == 0){
            throw Error("division by zero failed");
        }
        console.log(a / b);
    }
    catch(err){
        console.error(err);
    }
}
divide(10, 2);
divide(10, 0);
```
*The `try` block attempts execution, and the `catch` block handles errors if any occur.*

## Synchronous and Asynchronous Code

### Synchronous Code
*Synchronous code executes sequentially, blocking further execution until the current task is completed.*

### Asynchronous Code
*Asynchronous operations allow non-blocking execution, enabling the program to continue running while waiting for operations to complete.*

```js
setTimeout(() => {
  console.log("setTimeout");
}, 5000);
```
*The `setTimeout` function runs a piece of code after a specified delay.*

```js
var count = 0;
var interval = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);
```
*The `setInterval` function repeatedly executes a function at a given interval. The loop stops using `clearInterval()`.*

```js
fetch(`https://randomuser.me/api/`)
.then(response => response.json())
.then(data => console.log(data.results[0].gender));
```
*Fetching data using the Fetch API returns a promise, requiring `.then()` to handle responses.*

```js
axios.get('https://randomuser.me/api/')
.then(response => console.log(response.data.results[0].gender));
```
*Axios simplifies HTTP requests by directly providing JSON data.*
## Promises in JavaScript

A **Promise** represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can have three states:

- **Pending**: The operation has not yet completed.
- **Resolved (Fulfilled)**: The operation completed successfully.
- **Rejected**: The operation failed.

### Creating and Handling a Promise

```js
var pro = new Promise((resolve, reject) => {
  fetch(`https://randomuser.me/api/`)
  .then(response => response.json())
  .then(data => {
    if (data.results[0].gender === 'male') resolve('Got the male');
    else reject('Not a male');
  });
});

console.log(pro); // Initially, it will be "pending"

pro
  .then(data => {
    console.log(data); // If resolved, logs 'Got the male'
  })
  .catch(error => {
    console.error(error); // If rejected, logs 'Not a male'
  });

setTimeout(() => {
  console.log(pro); // Logs the resolved/rejected state after 5 seconds
}, 5000);
```

## Web Workers in JavaScript

### What are Web Workers?
Web Workers allow JavaScript to run scripts in the background, separate from the main thread. This improves performance by handling intensive tasks without blocking the UI.

### Why Use Web Workers?
- Executes code in the background without freezing the main thread.
- Ideal for CPU-intensive tasks like data processing, calculations, or fetching large amounts of data.
- Prevents performance lag in web applications.

### Example: Using Web Workers to Sum an Array

### **Main Thread (`main.js`)**
```js
// Creating a large array of numbers from 1 to 1000
var arr = Array.from({ length: 1000 }, (a, b) => b + 1);

// Creating a new Web Worker
const worker = new Worker('worker.js');

// Sending data to the worker
worker.postMessage(arr);

// Receiving the computed result from the worker
worker.onmessage = (data) => {
  console.log("Sum of array:", data.data);
};
```


# JavaScript DOM Manipulation

## Introduction
DOM Manipulation is the process of using JavaScript to change how a web page looks or behaves. This includes updating text, changing styles, or adding and removing elements dynamically while the page is being viewed.

## Accessing the Elements
Using JavaScript, elements can be accessed through different methods.

```javascript
//using class and saving it using a variable ele
var ele1=document.getElementsByClassName('demo');

//using id
var ele2=document.getElementById('demo');

//using tag name
var ele3=document.getElementsByTagName('p');

//best way to access the elements using query_selector
var ele4=document.querySelector('h1'); //selecting by tag name
var ele5=document.querySelector('.className'); //selecting by class
var ele6=document.querySelector('#idName'); //selecting by id
```

## Modifying the Element's Text
The text of an element can be changed using properties like textContent and innerHTML.

```javascript
//textContent => direct text changing
var btn=document.querySelector('#subBtn');
btn.textContent='Submitted'; //changing the text in the button

//innerHTML => change the content which also includes html in it.
var p=document.querySelector('#para');
p.innerHTML = '<i>Hello</i>'
p.innerHTML += '<i> World</i>' //adding the content rather than changing
```

## Manipulating Styles and Classes
Styles and classes of elements can be modified dynamically using JavaScript.

```javascript
//adding or updating styles
var h1=document.querySelector("h1");
h1.style.backgroundColor='#85144b'; //updating the background color
h1.style.color='#dddddd'; //updating the text color

//[adding, removing, toggle] => the classes
var h1=document.querySelector("h1");

//add class
h1.classList.add('myClass');

//remove class
h1.classList.remove('myClass');

//toggle class => if class is present then it will remove else it will add it.
h1.classList.toggle('myClass'); 
```

## Creating, Adding, Removing Elements
JavaScript allows for creating new elements and modifying the DOM dynamically.

```javascript
//creating the element
var h1ele=document.createElement('h1');
h1ele.textContent='Hello World';

//adding the element to the DOM
document.querySelector('body').appendChild(h1ele);

//removing the element from the DOM
document.querySelector('body').removeChild(h1ele);
```

## Event Handling
Event handling is the process of capturing, directing, and responding to user actions on a web page. This is done using event listeners.

```javascript
var btn =document.querySelector('#subBtn');
btn.addEventListener('click',()=>{
    alert('Button Clicked');
})
```

## Event Object
The event object contains information about the event that occurred, such as event type, target element, and more.

```javascript
var btn =document.querySelector('#subBtn');
btn.addEventListener('click',(e)=>{
    console.log(e);
})
```

