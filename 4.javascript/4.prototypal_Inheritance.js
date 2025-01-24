//Constructor & Prototypal Inheritance✔️

//Constructor-> Is a function used to create and initialize objects by calling it with new keyword
function Empty(){
    //no statements
    this.name="Empty";
}
var obj1=new Empty();
console.log(obj1);//{}
//an empty object is created✔️

//insert properties into the object
function User(name,age){
    this.name = name;
    this.age = age;
}
var user1=new User("Saketh",10);
var user2=new User("Reddy",20);
//the things are fine till now...

/*❌
but when there is a function for example as a item in the object which logs the name and age of the user...
*/
function Users(name,age){
    this.name = name;
    this.age = age;
    this.logUserDetails=function(){
        console.log(this.name, this.age);
    }
}
var users1=new Users("Saketh",10);
var users2=new Users("Arjun",20);
/*
Here each user object has their own fucntion from the constructor which is duplicated by which the space will be taken more by each user
*/



/*✔️
To get rid of this there is prototypal inheritance by which the space will be taken less by sharing the reference of the function rather than duplicating it.
*/
function Usersp(name,age){
    this.name = name;
    this.age = age;
}
Usersp.prototype.logUserDetails=function(){
    console.log(this.name, this.age);
}
var usersp1=new Usersp("Saketh",10);
var usersp2=new Usersp("Arjun",20);
/*No matter how many users there are but the reference of the function will be shared between all of them */
