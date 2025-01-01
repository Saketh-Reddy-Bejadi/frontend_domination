//Higher Order Functions

/*
A function which takes another function as an argument or a fucntion that accepts a function as a parameter is a higher order function
*/

function parent(child){
    console.log("Parent Function");
    child();
}
parent(function(){
    console.log('Child Function')
})



/*
Also a function that return a function as a value is also a higher order function
*/
function abcd(){
    return function(){
        console.log("Inner Function");
    }
}
var innerFunction=abcd();
innerFunction();