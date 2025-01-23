// Exporting a function from a module
//there can be one default export in a module or a file
export default function greet(name) {
    return `Hello, ${name}!`;
}

// Exporting a variable from a module
export const pi = 3.14159;

// Exporting a class from a module
export class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

// Importing the exported members in another file
// Assuming this code is in another file, e.g., `main.js`

// Importing the greet function
import greet from './2.importExport.js';

// Importing the pi variable
import { pi } from './2.importExport.js';

// Importing the Calculator class
import { Calculator } from './2.importExport.js';

// Using the imported members
console.log(greet('World')); // Output: Hello, World!
console.log(`The value of pi is ${pi}`); // Output: The value of pi is 3.14159

const calc = new Calculator();
console.log(`2 + 3 = ${calc.add(2, 3)}`); // Output: 2 + 3 = 5
console.log(`5 - 2 = ${calc.subtract(5, 2)}`); // Output: 5 - 2 = 3