// Web Workers => used to run scripts in background, separate from the main thread
var arr=Array.from({length: 1000},(a,b)=>b+1);
const worker=new Worker('10.2.worker.js');

worker.postMessage(arr)

worker.onmessage=data=>{
  console.log(data.data);
}
//performing sum of elements in the array using the worker
