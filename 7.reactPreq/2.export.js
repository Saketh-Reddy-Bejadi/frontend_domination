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
