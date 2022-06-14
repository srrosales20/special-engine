console.dir(document);

// give the domain of the web
console.log(document.domain);
//gives the URL of the web page 
console.log(document.URL);

// Gives you the document attribute, access to different elements

console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);

console.log(document.all)
//fyi all is deprecated
//javaScript can manipulate the doc

console.log(document.all[10]);
//document function to change header
document.all[10].textContent = "I just changed the header";
//1 form
console.log(document.forms);

//no links or images
console.log(document.links);
console.log(document.images);

// ///////////////////////////////////
// //// GetElementByID

console.log(document.getElementById('header-title'));

//Creating an object variable based on document function
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.textCentent = "Change the Title Again."
headerTitle.innerText = "Hello Changed You Again"

headerTitle.style.color = 'hotpink';
/////////////////////////////////////
///////GetElementByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items);
///changing the bckgrd color, fontweight, color
items[1].backgroundColor = 'pink';
items[1].style.fontweight = 'bold';
items[1].textContent = 'skee wee'
items[1].style.color = 'green';
//camel case starts at the second word.
items[2].backgroundColor = 'red';
items[2].style.fontweight = 'bold';
items[2].textContent = 'ooooop'
items[2].style.color = 'white';

items[0].backgroundColor = 'blue';
items[0].style.fontweight = 'bold';
items[0].textContent = 'Zee Phi'
items[0].style.color = 'white';

// for loop increasing by 1 starting at 1 through 10
// (i means integer)
for (let i = 1; i <=10; i++) {
    console.log(i);
}



// for loop increasing by 2
for (let i = 0; i <=20; i+=2) {
    console.log(i);
}



// decreasing by 2 starting from 100 
for (let i = 100; i >=0; i-=2) {
    console.log(i); 
}


// for loop array
const myDiamonds = ['Snacky , Scary , Lily , IttyBitty , Pinchie , Piggy , Lanky , Nibbles , Kibbles'];

for (let i = 0; i < myDiamonds.length; i++) {
    console.log(i, myDiamonds[i]);
}
 
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'grey';
    items[i].textContent = "Changing the List Items";
    items[i].style.color = 'white';
}

////////////////////////////////////////////////////
///////////GetElementBYTagName
///changing li style
var li = documents.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

li[1].textContent = "Hello 2 Now";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'green'; 
li[1].style.color = 'white';

for(var i = 0; i < li.length; i++) {

    li[i].style.backgroundColor = 'lightgrey';
    li[i].textContent = "I Changed The Items From The DOM"; 
    li[i].style.Color = 'white';
}

//////////////////////////////////////////
//////////////////Query Selector: 

//lets you access the dom and change elements
var header = document.querySelector('#main-header');

header.style.borderBottom = 'solid 4px hotpink';

///////Going into the DOM and manipulating the elements
var input = document.querySelector('input');
input.value = "I just changed the text value in the input box.";

////////going after attribute type to manipulte it
//Finds element, changes element

var submit = document.querySelector('input[type="submit"]');

submit.value = "HELLO BUTTON";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var otherItem = document.querySelector('.list-group-item:nth-child(2)');

// otherItem.style.color = 'coral';
////////////////////////////////////////////////////////////////
//. required to pass class
var titles = document.querySelectorAll('.title');
console.log(titles); 
//called index of 0. changed the title 
titles[0].textContent = 'Helloooo';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
//declared variable and changed attriubtes and property styles
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = 'whitesmoke';
    odd[i].style.backgroundColor = 'whitesmoke';
}

