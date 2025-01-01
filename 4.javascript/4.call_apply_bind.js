
//call function
/*
By default the value of this within the function will be "window", but by use call and then calling the function the what ever value we pass while calling the function will be the value of "this"

Remaing arguments can be passed by separating them using comma
*/
function val(a,b){
    console.log(this,`${a}, ${b}`);
}
val.call(); //window
val.call('val',10,20); //val (string)


//apply function
function val2(a,b){
    console.log(this,a+b);
}
val2.apply('val',[2,5]);
/* same concept applies here but if there are any arguments to pass then, the first value will the "this" value and all the other values should be passed in the form of an array */


//bind function
function val3(a,b){
    console.log(this,`${a}, ${b}`);
}
const nfunc=val3.bind('value',10,20);
nfunc();
/*
bind is as same as call and also can be used as a apply but the major difference is that bind will not run or call the function but it will return a function which can be used to call later 

passing the arguments is same as call(passing by seperated comma)
*/


