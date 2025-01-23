// 1. Basic Arrow Function
const add=(a,b)=>{
    return a+b;
};
console.log(add(2,3)); //5

// 2. Arrow Function with Implicit Return
const multiply=(a,b)=>a*b;
console.log(multiply(2,3)); //6

// 3. Arrow Function with No Parameters
const greet=()=> 'Hello,World!';
console.log(greet()); //Hello, World!

// 4. Arrow Function with One Parameter (no parentheses needed)
const square=x=>x*x;
console.log(square(4)); //16

// 5. Arrow Function Returning an Object
const createUser=(name,age)=>({name,age});
console.log(createUser('John',30)); //{ name: 'John', age: 30 }

// 6. Arrow Function as a Callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); //[2, 4, 6, 8, 10]

// 7. Arrow Function in a Higher-Order Function
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); //[2, 4]

// 8. Arrow Function with Rest Parameters
const sumAll=(...numbers) => numbers.reduce((acc, num) => acc +num,0);
console.log(sumAll(1, 2, 3, 4, 5)); //15

// 9. Arrow Function with Default Parameters
const greetUser=(name = 'Guest') =>`Hello, ${name}!`;
console.log(greetUser()); //Hello, Guest!
console.log(greetUser('Alice')); //Hello, Alice!