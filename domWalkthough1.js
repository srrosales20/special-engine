console.dir(document);

// give the domain of the web
console.log(document.domain);
//give the URL of the web page 
console.log(document.URL);

// Gives you the document attribute, access to different elements

console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);

console.log(document.all)

console.log(document.all[10]);

document.all[10].textContent = "I just changed the header"

console.log(document.forms);

console.log(document.links);

console.log(document.images);

///////////////////////////////////
//// Get element by ID

console.log(document.getElementById('header-title'));
//
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.textCentent = "Change the Title Again."
headerTitle.innerText = "Hello Changed You Again"

headerTitle.style.color = 'hotpink';
/////////////////////////////////////
///////GetElementByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items);
///
items(1).backgroundColor = 'pink'
items(1).style.fontweight = 'bold';
items(1).textContent = 'skee wee'
items(1).style.color = 'green';

items(1).backgroundColor = 'pink'
items(1).style.fontweight = 'bold';
items(1).textContent = 'skee wee'
items(1).style.color = 'green';

items(1).backgroundColor = 'pink'
items(1).style.fontweight = 'bold';
items(1).textContent = 'skee wee'
items(1).style.color = 'green';



