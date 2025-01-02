// 1st
var btn1=document.querySelector("#btn1");
var p1=document.querySelector("#p1");
btn1.addEventListener('click',()=>{
    p1.textContent='Lorem ipsum dolor sit amet.';
});


// 2nd
var btn2=document.querySelector("#btn2");
var img1=document.querySelector("#img12");
var img2=document.querySelector("#img22");

var ad1='https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8';
var ad2='https://images.unsplash.com/photo-1731862872903-1d39fe0c10f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'

btn2.addEventListener('click',()=>{
    img1.src=img1.src==ad2?ad1:ad2;
    img2.src=img2.src==ad2?ad1:ad2;
})


// 3rd
var input3=document.querySelector('#input3');
var subBtn3=document.querySelector('#btn3');
subBtn3.addEventListener('click',event=>{
    event.preventDefault();
    if(input3.value===''){
        alert("Please fill the field");
    }
    else if(input3.value.length<8){
        alert('Shoud contain 8 chars');
    }
    else if(!(input3.value.includes('@'))||!(input3.value.includes('#'))){
        alert('Should contain special characters');
    }
});



// 4th
var inp14=document.querySelector('#inp14');
var sub14=document.querySelector('#sub14');
var ol14=document.querySelector('#ol14');
sub14.addEventListener('click',(e)=>{
    e.preventDefault();
    if (inp14.value!==''){
        var i=document.createElement('li');
        i.textContent=inp14.value;
        i.classList.add('li')
        ol14.appendChild(i);
        inp14.value='';
    }
    else{
        alert('Please enter')
    }
})
var rem14=document.querySelector('#rem14');
var li;
rem14.addEventListener('click',(e)=>{
    e.preventDefault();
    if (inp14.value!==''){
        li=document.querySelectorAll('.li');
        for(var i=0;i<li.length;i++){
            var e=li[i];
            if(e.innerHTML==inp14.value){
                ol14.removeChild(e);
                break;
            }
        };
        inp14.value='';
    }
    else{
        alert('Please enter')
    }
})



// 5th
var btn14=document.querySelector('#btn14');
var btn24=document.querySelector('#btn24');
var h14=document.querySelector('#h14');
var Int;
btn14.addEventListener('click',()=>{
    var count=1;
    Int=setInterval(()=>{
        h14.textContent=count;
        count++;
    },1000);
})

btn24.addEventListener('click',()=>{
    clearInterval(Int);
});