//Spread Operator
var arr = [1, 2, 3, 4, "s"];
var obj={name: "Javascript", age:20,email:"javascript@gmail.com"};

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




