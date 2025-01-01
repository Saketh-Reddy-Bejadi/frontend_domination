//Event Delegation & Event Bubbling

//event delegation
//single event listener is attached to the parent element to handle events related to its child elements
document.querySelector('.main').addEventListener("click", function(details){
    if (details.target.id=='ele1') console.log("Frontend");
    else if (details.target.id=='ele2') console.log("Domination");
    
})

//event bubbling
/*
where an event that occurs on a child element propagates up through its parent or ancestor elements in the DOM tree, triggers any event listeners that are attached to that element
*/
document.querySelector('#ele1').addEventListener("click",()=>{
    console.log('heading clicked');
})
document.querySelector('body').addEventListener("click",()=>{
    console.log('body clicked');
})

//if you click out of heading 'body clicked', the if you click on the heading both the events will be triggered...