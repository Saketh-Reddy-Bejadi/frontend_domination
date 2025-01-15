// console alert prompt

console.log("To print a message");
console.warn("To print a warning");
console.error("To print a error");

alert("To print a message as a alert");

prompt("To print a message and take input");
var input=prompt("Enter your name");
console.log(input);



//variable declaration & initialization
var a=10;
var b=20;
console.log(a+b);

const amount=2000; //amount will not be changed
// amount=10 //error
var discount=10;
console.log((2000/discount)*100-amount);
var discount=25;
console.log((2000/discount)*100-amount);



// types(primitive and reference)

//primitive types
// character->'a'
// string->"Javascript"
// number-> 12
// boolean-> true or false
// float -> 12.45

//reference types
// {} () []


// assigning directly for primitive datatypes will work✔️
// assigning directly for reference datatypes will not work❌
var c=10;
var d=c;
console.log(`c=${c},d=${d}`);

c-=1
console.log(`c=${c},d=${d}`);


var e=[1,2,3,4,5];
var f=e;
console.log(`e=[${e}], f=[${f}]`);

e.pop();
console.log(`e=[${e}], f=[${f}]`);



//spread operator -> to make a copy✔️
var g=['a', 'b', 'c', 'd', 'e']
var h=[...g];
console.log(`g=[${g}], h=[${h}]`);

g.pop();
console.log(`g=[${g}], h=[${h}]`);

h.push('f');
console.log(`g=[${g}], h=[${h}]`);



//Conditionals -> if, if-else, else-if, ternary operator, switch
// falsy = [0, false, undefined, null, NaN, "", '', document.all];

//if
if(0) console.log("false");
 
//if else
if (0) console.log("false");
else console.log("true");

//if else_if else
if (0) console.log("false");
else if (1) console.log("true");
else console.log("false");

//ternary operator
var a = 1;
var b = a ? "true" : "false";
console.log(b);

//switch❌


//Loops -> for✔️, while✔️, do-while❌, foreach✔️, forin✔️, forof❌

//for loop
for(var i=1;i<6;i++){
    console.log(i);
}//1 2 3 4 5

//while loop
var i=1;
while(i<=5){
    console.log(i);
    i++;
} // 1 2 3 4 5

//for each loop
var a=[1,2,3,4,5];
a.forEach((i)=>console.log(i));

//with index
a.forEach((e,i)=>console.log(i,e));

//for in loop
var a={name:'John',age:30};
var b=[1,2,3,4,5];
for(var i in a) console.log(i,a[i]);
for(var i in b) console.log(i,b[i]);



//Functions -> [function_statement, function_expression, anonymous_function, arrow_function]

//function_statement
function func(){
    var a=10,b=20;
    console.log(a+b);
}
func();

//function_expression = anonymous_function(function without name) assigned to a variable
var expression=function(){
    var a=20;
    console.log(a);
}
console.log(expression);

//arrow_function=> [basic_function, single_parameter, implicit_return]
//basic_arrow_function
var func=(a,b)=>{
    console.log(a+b);
}
func(10,20);

//single_parameter
var func=(a)=>{
    console.log(a+10);
}
func(10);
var func=a=>console.log(a+10);

//implicit_return
var func=(a)=>a+=1;
console.log(func(20));


//undefined, no defined, null

//undefined -> Is a default value for a any instance(variable or function). Also it can a garbage value assigned to a variable or function
var a;

//not defined -> Is an error occurred when trying to access a variable or function which is not declared
var b;
console.log(a);

//null -> A value represents intentional absence of any value
var a=null; //assigned null as a values which can be changes later



//Arrays

//collection of elements together in sequential order
var real_number=[1,2,3,4,5,6];

//access using their index which starts from 0
console.log(real_number[0]);
console.log(real_number[1]);
console.log(real_number[100]); //undefined


//Objects

//an array is used to store the no.of users details (user1, user2)
//an object is used to store the no.of details about the each user(name, email, password etc)
//In object each user detail is stored in the form of key and value pairs (name:"Javascript")

var users =['Saketh', 'Harshith', 'Arjun'];
var Saketh={
    username: "saketh1",
    email: "saketh@gmail.com",
    password: "mailPassword2"
}
var Harshith={
    username: "harshith2",
    email: "harsha@gmail.com",
    password: "harsh"
}
