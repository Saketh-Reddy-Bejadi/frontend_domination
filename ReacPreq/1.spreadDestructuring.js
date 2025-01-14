//Spread Operator
var arr = [1, 2, 3, 4, "s"];
var obj={name: "Javascript", age:20,email:"javascript@gmail.com"};
obj.email='java@gmail.com'

//if we make changes in child then that gonna replicate in the child as well..
//for array
var arr1=arr
arr1.pop()

//for object
var obj1=obj
obj1.age=24

//this way of changing variables is not possible in react..



// we can use spread operator by which the changes in child not gonna replicate in parent
var arr1=[...arr]
arr1.pop()

//also same for the object
var obj1={...obj}
obj1.email='reactjs@gmail.com'

//this is possible in react becoz we are not making changes directly...
//after the way of doing things, reassign the child to parent...


//to use elements or data in the object firstly we have to get into the object and then access the value using its key
var obj={name: "Javascript", age:20,email:"javascript@gmail.com"};
console.log(obj.name); //Javascript
console.log(obj.age); //20

//but using destructuring concept we can directly access the value of the object elements
var obj={name: "Javascript", age:20,email:"javascript@gmail.com"};
var {name,age}=obj;
console.log(name); //Javascript 
// this is based on the key name of the object elements


//But in array we can directly access the value using the index
var arr = ["Javascript", 21, "javascript@gmail.com"];
var [name,age,email]=arr;
console.log(age); //21

//if you don't want to access the age
var [name,,email]=arr;
