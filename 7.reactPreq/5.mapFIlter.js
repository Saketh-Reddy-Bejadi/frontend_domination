//map() and filter()

//map() => used to transform the each element ans returns a new array with the transformed values..

var arr=[11,9,6,4,2,45,1,13,17,9,5,3];
var ans=arr.map(e=>e>10?`${e}`:e); //adds up one to each element
// e represents all the elements in the array one by one..
//at last returning the values is must for sure. Else all the array values will be assigned to undefined..


//filter() => used to create a new arr based on a condition..
//Filters elements based on a condition and returns a new array with elements that satisfy the condition..
var res=arr.filter(e=>e>10)

