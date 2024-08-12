
// //call
// function val(){
//     console.log(this);
// }
// // val.call(); //window
// val.call('val'); //val (string)
// /*by default the value of this within the function will be "window", but by use call and then calling the function the what ever value we pass while calling the function will be the value of "this"
// */


// //apply
// function val2(a,b){
//     console.log(this,a+b);
// }
// val2.apply('val',[2,5]);
// /* same concept applies here but if there are any arguments to pass then, the first value will the "this" value and all the other values should be passed in the form of an array */


// //bind
// function val3(){
//     console.log(this);
// }
// const nfunc=val3.bind('value');
// nfunc();
// /* bind is as same as call and also can be used as a apply but the major difference is that bind will not run or call the function but it will return a function which can be used to call later */


