// console.log("this");

// //global
// console.log(this); // this value in the global scope will be "window"

// //function
// function ThisValue(){
//     console.log(this); // this value in a function scope will be "window"
// }
// ThisValue();

// //method
// var obj1={
//     name:'john',
//     ThisValue:function(){
//         console.log(this); // this value in a method scope will be the object 'obj1'
//     }
// }
// obj1.ThisValue();


// //constructor function
// const val1= new function value(){
//     console.log(this); // this value in a constructor function scope will be "new black object"
// }




// //function inside the method in ES5
// var obj2 = {
//   name: "john",
//   ThisValue: function () {
//     function thisValue() {
//       console.log(this); // this value in the function within the method scope will "window"
//     }
//     thisValue();
//   },
// };
// obj2.ThisValue();


// // function inside the method in ES6
// var obj3 = {
//     name: "john",
//   ThisValue:function(){
//     var value=()=>{
//       console.log(this); // this value in the function within the method scope will be the object 'obj3'
//     }
//     value();
//   }
// }
// obj3.ThisValue();



// addEventListener
document.getElementById("demo").addEventListener("click",function(){
    console.log(this); // this value in the event listener will be the element 'demo'
})
