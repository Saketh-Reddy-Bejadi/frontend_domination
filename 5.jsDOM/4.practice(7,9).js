// 7th
var span=document.querySelector('span');
var h3=document.querySelector("h3");
var clicked=false;
h3.addEventListener("click",()=>{
    if (clicked!=true){
        clicked=true;
        h3.innerHTML = "";
        h3.style.width='0px'
        h3.style.padding='2px'
        h3.style.border='none';
        count=0
        var Int=setInterval(()=>{
            if(count==100){
                clearInterval(Int);
            }
            h3.style.width=count+'%';
            count++;
        },69);
        setTimeout(()=>{
            h3.innerHTML='Done✅'
            h3.style.padding='13px 38px'
        },7400)
    }
    })



//9th
var counter=document.querySelector('#counter');
        var text=document.querySelector('textarea');
        text.addEventListener('input',()=>{
            counter.textContent=text.value.length;
        })