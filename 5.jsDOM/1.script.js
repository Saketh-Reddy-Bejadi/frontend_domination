//DOM Manipulation => using JavaScript to change how a web page looks or behaves—like updating text, changing styles, or adding/removing elements—while the page is being viewed.

//Accessing the Elements

//using class and saving it using a variable ele
var ele1=document.getElementsByClassName('demo');


//using id
var ele2=document.getElementById('demo');

//using tag name
var ele3=document.getElementsByTagName('p');


//best way to access the elements using query_selector
var ele4=document.querySelector('h1'); //selecting by tag name
var ele5=document.querySelector('.className'); //selecting by class
var ele6=document.querySelector('#idName'); //selecting by id



//Modifying the element's text => Change the text of an element (textContent, innerHTML).

//textContent => direct text changing
var btn=document.querySelector('#subBtn');
btn.textContent='Submitted'; //changing the text in the button

//innerHTML => change the content which also includes html in it.
var p=document.querySelector('#para');
p.innerHTML = '<i>Hello</i>'
p.innerHTML += '<i> World</i>' //adding the content rather then changing



//Manipulating styles and classes

//adding  or updating styles
var h1=document.querySelector("h1");
h1.style.backgroundColor='#85144b'; //updating the background color
h1.style.color='#dddddd'; //updating the text color

//[adding, removing, toggle] => the classes
var h1=document.querySelector("h1");

//add class
h1.classList.add('myClass');

//remove class
h1.classList.remove('myClass');

//toggle class => if class is present then it will remove else it will add it.
h1.classList.toggle('myClass'); 


//[Creating, adding, removing] => elements

//creating the element
var h1ele=document.createElement('h1');
h1ele.textContent='Hello World';

//adding the element to the DOM
document.querySelector('body').appendChild(h1ele);

//removing the element from the DOM
document.querySelector('body').removeChild(h1ele);



//Event Handling => Event handling is the process of capturing, directing, and responding to user actions on a web page. By adding event listeners to the elements.
var btn =document.querySelector('#subBtn');
btn.addEventListener('click',()=>{
    alert('Button Clicked');
})


//Event Object => The event object is a special object that contains information about the event that occurred.
var btn =document.querySelector('#subBtn');
btn.addEventListener('click',(e)=>{
    console.log(e);
})
