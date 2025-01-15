//Synchronous and Asynchronous

//Synchronous code is which is not consist of any these functions [setTimeout, setInterval, fetchAPI, Axios, promise]


// Asynchronous

//setTimeout-> to run code after some time(specified)
setTimeout(() => {
  console.log("setTimeout");
}, 5000);


//setInterval-> to run code after some time(specified) in a loop
var count=0;
var setInerFunc=setInterval(() => {
  console.log(count);
  count++;
  if(count>5){
    clearInterval(setInerFunc);
  }
}, 5000);
//to stops the infinite loop use "clearInterval()" and pass the function variable assigned to..


//fetch API
fetch(`https://randomuser.me/api/`)
.then(raw=>raw.json()) //the system will return you the raw data, so we need to convert it into json..
.then(res=>console.log(res.results[0].gender)); //after conversion to json we use the data..


//axios 
axios.get('https://randomuser.me/api/')
.then(res=>console.log(res.data.results[0].gender)) //axios with provide the json formatted data directly

//Promises=> is an object representing the eventual completion or failure of an asynchronous operation. It represents a value that wil be available in the future.Either it succeeds("resolved") or fails("rejected") but in time time of execution of the operation the value will be "pending"...

//For now is a concept of handling the error occurring while fetching the data from the server..
var pro=new Promise((resolve, reject) => {
  fetch(`https://randomuser.me/api/`)
  .then(raw=>raw.json())
  .then(data=>{
    if(data.results[0].gender === 'male') resolve('Got the male')
    else reject('Not a male')
  })
})
console.log(pro)

pro
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})

setTimeout(()=>{
  console.log(pro)
},5000) //status after the data is fetched



//callbacks=> Is a concept of executing a function which is passed as a argument to the main function. If the task in the main function is done then the callback function will be executed immediately..

//logging the name[title,firstName,lastName] of the user using callback function
function fetchTask(url, callback){
  fetch(url)
  .then(raw=>raw.json())
  .then(data=>{
    callback(data)
  })
}

fetchTask(`https://randomuser.me/api/`,(data)=>{
  var name=data.results[0].name;
  console.log(`${name.title} ${name.first} ${name.last}`)
})


// async and await ==> are used to make an asynchronous code to execute as line by line or waiting until the asynchronous code and then executing the after statements

//use await to wait until the asynchronous code is processes and ready to be executed
//use async for the parent of this while block which consists of asynchronous and synchronous code

function fetchRenderTask1(url){
  var res=fetch(url)
  .then(raw=>raw.json())
  console.log(res)
}
fetchRenderTask1(`https://randomuser.me/api/`) //Promise {<pending>}


//the line logging the gender is executed right after the fetching the data
async function fetchRenderTask2(url){
  var res=await fetch(url)
  .then(raw=>raw.json())
  console.log(res.results[0].gender)
}
fetchRenderTask2(`https://randomuser.me/api/`) //male



//Event loop==> A mechanism that manages how to handle asynchronous operations.*/
//Event loop checks the main stack where all the operations will be performed or executed is empty or not, to add asynchronous operations to main stack for the execution..




//Generator => It allows developers take control over the execution flow of statements in the functions
function* generator(){
  console.log("Execution started => Step 1");
  yield 1;
  console.log("=> Step 2");
  yield 2;
  console.log("=> Step 3");
  yield 3;
  console.log("=> Step 4");
  yield 4;
  console.log("=> Step 5");
  yield 5;
}
var gen=generator();
console.log(gen.next()); //executes till the next yield
console.log(gen.next());
console.log(gen.next().value); //execute and return the yield value
// for(var i=0;i<4;i++){
//   console.log(gen.next());
// }



// Web Workers => used to run scripts in background, separate from the main thread
var arr=Array.from({length: 1000},(a,b)=>b+1);
const worker=new Worker('10.worker.js');

worker.postMessage(arr)

worker.onmessage=data=>{
  console.log(data.data);
}
//performing sum of elements in the array using the worker


