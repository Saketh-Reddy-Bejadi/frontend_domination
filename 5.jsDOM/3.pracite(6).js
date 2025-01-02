// 6th

var btn1=document.querySelector("#btn1");
var btn2=document.querySelector("#btn2");
var btn3=document.querySelector("#btn3");

var user1=document.querySelector("#user1");
var user2=document.querySelector("#user2");
var user3=document.querySelector("#user3");

user1.style.display='block';

function alldisappear(){
    user1.style.display='none';
    user2.style.display='none';
    user3.style.display='none';
}

btn1.addEventListener('click',()=>{
    alldisappear();
    user1.style.display='block';
});

btn2.addEventListener('click',()=>{
    alldisappear();
    user2.style.display='block';
});

btn3.addEventListener('click',()=>{
    alldisappear();
    user3.style.display='block';
});