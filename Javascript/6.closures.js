//Clouser

/*
If few varialbes are declartion and initalization with values in a function, right after the execution of that function all the declarations will be removed from the memory
*/
function Xample(){
    var a=10;
    var b=20;
}// a, b will be removed from the memory after the execution of the function

/*
But in JS there is a concept of remembering or storing the varialbe for the future use cases if needed is closure.
*/

/*
If there exists a function inside another function and uses the variables defined in the parent or outer function after the execution of the parent function is done.
*/
function parent(){
    var num1=20;
    var num2=40;
    return function(){
        console.log(`${num1}, ${num2}`);
    }
}
var func=parent();
func();

/*
Giving access to the inner function to access or manipulate the variables in the outer function which is already executed.
*/
