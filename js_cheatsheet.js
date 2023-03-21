//                                                             *
//                                                           *****
//                                                        ***********
//                                                     *****************
//                                                  ***********************
//                                               ******************************
//                                            *************************************
//                                       ***********************************************
//                                    *****************************************************
//                                  *********************************************************
//                                  * * *                                                   *
//                                  * *                      Javacript                    * *
//                                  *                                                   * * *
//                                  *********************************************************
//                                    *****************************************************
//                                       ***********************************************
//                                            *************************************
//                                               ******************************
//                                                  ***********************
//                                                     *****************
//                                                        ***********
//                                                           *****
//                                                             *

// Element => HTMLTage, Content => TextNode

// #FORM
let allForms = document.forms;
// Return an HTML collection of the forms objects in the page document.
let contactForm = document.forms.contact;
// Retrieves a collection of contact form, in source order, of the form objects in the document.
// Form Methods:-
e.preventDefault();
// prevent the default behaviour of the form when a user click on submit. Ex: e.preventDefault();
// Form Events:-
myBtn.onblur(function(){/* code goes here... */})
// When an element loses focus 
myBtn.onchange(function(){/* code goes here... */})
// The content of a form element changes(for <input>, <select>and <textarea>){)} 
myBtn.onfocus(function(){/* code goes here... */})
// An element gets focus 
myBtn.onfocusin(function(){/* code goes here... */})
// When an element is about to get focus 
myBtn.onfocusout(function(){/* code goes here... */})
// The element is about to lose focus 
myBtn.oninput(function(){/* code goes here... */})
// User input on an element 
myBtn.oninvalid(function(){/* code goes here... */})
// An element is invalid  
myBtn.onreset(function(){/* code goes here... */})
// A form is reset 
myBtn.onsearch(function(){/* code goes here... */})
// The user writes something in a search field (for <input="search">) 
myBtn.onselect(function(){/* code goes here... */})
// The user selects some text (for <input> and <textarea>) 
myBtn.onsubmit(function(){/* code goes here... */})
// A event that in the form itself and its fire when the user click submitted, it use to make a clinet side validations inside the browser before send the form data to the server.

// #NODE
const ul = document.createElement('li');
// Creates a HTML element for the specified tag.
// Node Methods:-
li.append('span');
// Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.
ul.appendChild('li'); 
// Adds a new child node to an element as the last child node 
ul.cloneNode('li');
// Clones an HTML element 
ul.compareDocumentPosition('nodeName');
// Compares the document position of two elements 
ul.getFeature('');
// Returns an object which implements the APIs of a specified feature  
ul.hasAttributes('style'); 
// Returns true if an element has any attributes, otherwise false 
ul.hasChildNodes();
// Returns true if an element has any child nodes, otherwise false 
ul.insertBefore
// Inserts a new child node before a specified, existing child node 
ul.isDefaultNamespace() 
// Returns true if a specified namespaceURI is the default, otherwise false 
ul.isEqualNode() 
// Checks if two elements are equal 
ul.isSameNode() 
// Checks if two elements are the same node 
ul.isSupported()
// Returns true if a specified feature is supported on the element 
ul.lookupNamespaceURI() 
// Returns the namespaceURI associated with a given node 
ul.lookupPrefix()
// Returns a DOMString containing the prefix for a given namespaceURI, if present 
ul.normalize() 
// Joins adjacent text nodes and removes empty text nodes in an element 
ul.removeChild() 
// Removes a child node from an element 
ul.replaceChild() 
// Replaces a child node in an element Element Methods
ul.childNodes()
// Gives a collection of an element’s child nodes ( All childs node withing the lines pracer = "text")
ul.children();
// Returns the element children.
ul.firstChild(); 
// Returns the first child node of an element 
ul.lastChild();
// The last child node of an element 
ul.nodeName();
// Returns the name of a node 
ul.nodeType();
// Returns the type of a node 
ul.nodeValue();
// Sets or returns the value of a node 
ownerDocument
// The top - level document object for this node 
li.parentNode();
// Returns the parent node of an element
li.parentElement();
// Returns the parent node of an element (you can write it twice and will return a refrens for the parent of the parent of the element you select)
ul.nextSibling();
// Returns the next node at the same node tree level (node includes the line breaker = "text")
ul.nextElementSibling(); 
// Returns the next element at the same node tree level 
ul.previousSibling
// Returns the node preceding the current one 
ul.previousElementSibling 
// Returns the element preceding the current one
ul.baseURI
// Provides the absolute base URL of an HTML element
h1.attributes('style');
// Returns a live collection of all attributes registered to an element 
book.setAttribute('class', 'books');
// Sets or changes the specified attribute to a specified value NOTE : setAttribute() overwrite the value.
book.setAttributeNS('attributeType', 'attrubyteName');
// Adds a new attribute or changes the value of an attribute with the given namespace and name 
book.setAttributeNode('attributeType', 'attrubyteName'); 
// Sets or changes the specified attribute node  
book.setAttributeNodeNS('attributeType', 'attrubyteName'); 
// Adds a new namespaced attribute node to an element
book.hasAttribute('class');
// Returns true if an element has any attributes, otherwise false 
book.hasAttributeNS();
// Provides a true/false value indicating whether the current element in a given namespace has the specified attribute 
a.getAttribute('href'); 
// Returns the specified attribute value of an element node 
a.getAttributeNS('href');
// Returns string value of the attribute with the specified namespace and name  
a.getAttributeNode('href');
// Gets the specified attribute node 
a.getAttributeNodeNS('href');
// Returns the attribute node for the attribute with the given namespace and name 
book.removeAttribute('class');
// Removes a specified attribute from an element 
book.removeAttributeNS('class');
// Removes the specified attribute from an element within a certain namespace 
book.removeAttributeNode('class');
// Takes away a specified attribute node and returns the removed node 
console.log(li.classList); 
// Get you a list of all the defrinde classes of the li has
li.className = 'container';
// Add a class to an element
li.classList.add('wrapper');
// Add classes to an element in a valid way
li.classList.remove('main');
// Remove classes to an element in a valid way
h1.style.backgroundColor = red;
// Add or Update the tag style attributes. NOTE : it's Not OverWriten the attrubites, it's only add without delete the attribute that alredy exist.
li.textContent = '';
// Sets or returns the textual content of a node and its descendants, Add a text content btween tags <tag>textContent</tag>
li.innerHTML = '<h1>Hello world</h1>';
// Get all the html chids of the element as an html tages and content <p>sometext</p>
li.innerText = 'Hello world';
// Get ony the text of the element

// #ARRAY
...Array;
// Spread oprator: make every elemets in the array as a spread variable by its own.  
Array.isArray(arrg)
// Check if arrg is an array or not, return T/F.
Array.from(arrg)
// To convert arrg to an array. Creates an array from an iterable object.
// Array Methods:-
filter()
// Creates a new array filled with elements, that pass a test provided by a function
map()
// creates a new array from calling a function for every array element.
concat()
// Join several arrays into one 
indexOf()
// Returns the first position at which a given element appears in an array  
join()
// Combine elements of an array into a single string and return the string 
lastIndexOf()
// Gives the last position at which a given element appears in an array  
pop()
// Removes the last element of an array 
push()
// Add a new element at the end
reverse()
// Reverse the order of the elements in an array 
shift()
// Remove the first element of an array 
slice()
// Pulls a copy of a portion of an array into a new array ​of 4 24 
sort()
// Sorts elements alphabetically 
splice()
// Adds elements in a specified way and position 
toString()
// Converts elements to strings 
unshift()
// Adds a new element to the beginning 
valueOf()
// Returns the primitive value of the specified object

// #OUTPUTING DATA
// Outputing Data Methods:-
alert('alert message');
// Output data in an alert box in the browser window 
confirm('a confrim alert');
// Opens up a yes/no dialog and returns true/false depending on user click 
console.log('anything');
// Writes information to the browser console, good for debugging purposes  
document.write('anything');
// Write directly to the HTML document 
prompt()
// Creates an dialogue for user input Global Functions  
decodeURI()
// Decodes a Uniform Resource Identifier (URI) created by encodeURI or similar 
decodeURIComponent()
// Decodes a URI component 
encodeURI()
// Encodes a URI into UTF-8 
encodeURIComponent('x')
// Same but for URI components 
eval('x')
// Evaluates JavaScript code represented as a string 
isFinite('x')
// Determines whether a passed value is a finite number 
isNaN('x');
// Determines whether a value is NaN or not 
Number('x');
// Returns a number converted from its argument 
parseFloat('x');
// Parses an argument and returns a floating point number 
parseInt('x');
// Parses its argument and returns an integer

// #STRING
// String Methods:-
stringName[0]
// getting single char from a string.
length ()
// get string lenght.
toUpperCase ()
// Uppercase myName string using toUpperCase method.
index ('s')
// Return the position of the parameter that pass to it.
lastIndexOf()
// Return the last index of an element 
slice (2, 10)
// Slice the string from index number 2 till index number 10.
substr (2, 10)
// Show String from position number 2 and show more 10 index.
replace ('B', 'b')
// Replace char or string the B with b.
include ('B')
// Check if string myName have a B on it, return T/F.
include()
// Return True if the string have the text or char inside of it. name.include("ali") 
charAt() 
// Returns a character at a specified position inside a string 
charCodeAt() 
// Gives you the unicode of character at that position 
concat()  
// Concatenates (joins) two or more strings into one 
fromCharCode() 
// Returns a string created from the specified sequence of UTF-16 code units 
indexOf() 
// Provides the position of the first occurrence of a specified text within a string 
lastIndexOf() 
// Same as indexOf() but with the last occurrence, searching backwards 
match() 
// Retrieves the matches of a string against a search pattern 
replace() 
// Find and replace specific text in a string 
search() 
// Executes a search for a matching text and returns its position 
slice() 
// Extracts a section of a string and returns it as a new string 
split() 
// Splits a string object into an array of strings at a specified position 
substr() 
// Similar to slice() but extracts a substring depended on a specified number of characters 
substring() 
// Also similar to slice() but can’t accept negative indices 
toLowerCase() 
// Convert strings to lowercase 
toUpperCase() 
// Convert strings to uppercase 
valueOf() 
// Returns the primitive value (that has no properties or methods) of a string object  
repeat()
// Repeat the string, name.repeat(3) mean repeat name 3 times.
startWith()
// Return True if the string start with the argument we insert, name.startWith("A", 5) mean did the name on posititon 5 start with A.
endWith()
// Same as startWith() but it's check the string end.
set()
// Set an array and delete all the douplcate on it. var x = [1,2,2,3] var y = new set(x);

// #MATH
// Math Methods:-
toExponential() 
// Returns a string with a rounded number written as exponential notation  
toFixed() 
// Returns the string of a number with a specified number of decimals  
toPrecision() 
// String of a number written with a specified length 
toString() 
// Returns a number as a string 
valueOf() 
// Returns a number as a number 
abs(x) 
// Returns the absolute (positive) value of x 
acos(x) 
// The arccosine of x, in radians 
asin(x) 
// Arcsine of x, in radians 
atan(x) 
// The arctangent of x as a numeric value 
atan2(y,x) 
// Arctangent of the quotient of its arguments 
ceil(x) 
// Value of x rounded up to its nearest integer 
cos(x) 
// The cosine of x (x is in radians)  
exp(x) 
// Value of Ex 
floor(x) 
// The value of x rounded down to its nearest integer 
log(x) 
// The natural logarithm (base E) of x 
max(x,y,z,...,n) 
// Returns the number with the highest value 
min(x,y,z,...,n) 
// Same for the number with the lowest value 
pow(x,y) 
// X to the power of y 
random() 
// Returns a random number between 0 and 1 
round(x)
// The value of x rounded to its nearest integer 
sin(x) 
// The sine of x (x is in radians) 
sqrt(x) 
// Square root of x 
tan(x) 
// The tangent of an angle

// #DATA & TIME
// Dates & Time Methods:-
Date() 
// Creates a new date object with the current date and time  
Date(2017, 5, 21, 3, 23, 10, 0) 
// Create a custom date object. The numbers represent year, month, day, hour, minutes, seconds, milliseconds. You can omit anything you want except for year and month. 
Date("2017-06-23") 
// Date declaration as a string 
getDate() 
// Get the day of the month as a number (1-31) 
getDay() 
// The weekday as a number (0-6) 
getFullYear() 
// Year as a four digit number (yyyy) 
getHours() 
// Get the hour (0-23) 
getMilliseconds() 
// The millisecond (0-999) 
getMinutes() 
// Get the minute (0-59) 
getMonth() 
// Month as a number (0-11) 
getSeconds()
// Get the second (0-59) 
getTime() 
// Get the milliseconds since January 1, 1970 
getUTCDate() 
// The day (date) of the month in the specified date according to universal time (also available for  day, month, fullyear, hours, minutes etc.) 
parse() 
// Parses a string representation of a date, and returns the number of milliseconds since January  1, 1970  
setDate() 
// Set the day as a number (1-31) 
setFullYear() 
// Sets the year (optionally month and day) 
setHours() 
// Set the hour(0 - 23) 
setMilliseconds() 
// Set milliseconds (0-999) 
setMinutes() 
// Sets the minutes(0 - 59) 
setMonth() 
// Set the month (0-11) 
setSeconds() 
// Sets the seconds (0-59) 
setTime() 
// Set the time (milliseconds since January 1, 1970) 
setUTCDate() 
// Sets the day of the month for a specified date according to universal time (also available for  day, month, fullyear, hours, minutes etc.)

// #WINDOW
// Window Methods:-
alert() 
// Displays an alert box with a message and an OK button 
blur() 
// Removes focus from the current window 
clearInterval() 
// Clears a timer set with setInterval() 
clearTimeout() 
// Clears a timer set with setTimeout() 
close() 
// Closes the current window 
confirm()
// Displays a dialogue box with a message and an OK and Cancel button 
focus() 
// Sets focus to the current window 
moveBy() 
// Moves a window relative to its current position 
moveTo() 
// Moves a window to a specified position 
open() 
// Opens a new browser window 
print() 
// Prints the content of the current window 
prompt() 
// Displays a dialogue box that prompts the visitor for input 
resizeBy() 
// Resizes the window by the specified number of pixels 
resizeTo()
//  Resizes the window to a specified width and height 
scrollBy() 
// Scrolls the document by a specified number of pixels 
scrollTo() 
// Scrolls the document to specific coordinates  
setInterval() 
// Calls a function or evaluates an expression at specified intervals
setTimeout() 
// Calls a function or evaluates an expression after a specified interval 
stop() 
// Stops the window from loading
// Window Events and Properties:-
closed 
// Checks whether a window has been closed or not and returns true or false 
defaultStatus 
// Sets or returns the default text in the statusbar of a window 
document 
// Returns the document object for the window 
frames 
// Returns all <iframe> elements in the current window 
history 
// Provides the History object for the window 
innerHeight 
// The inner height of a window’s content area 
innerWidth 
// The inner width of the content area 
innerText
// Get the Text of the element
innerHTML
// Get all the tages of the element
length 
// Find out the number of <iframe> elements in the window 
location 
// Returns the location object for the window 
name 
// Sets or returns the name of a window 
navigator
// Returns the Navigator object for the window 
opener 
// Returns a reference to the window that created the window 
outerHeight 
// The outer height of a window, including toolbars/ scrollbars 
outerWidth 
// The outer width of a window, including toolbars/ scrollbars 
pageXOffset 
// Number of pixels the current document has been scrolled horizontally 
pageYOffset 
// Number of pixels the document has been scrolled vertically 
parent 
// The parent window of the current window 
screen 
// Returns the Screen object for the window 
screenLeft
// The horizontal coordinate of the window (relative to screen) 
screenTop 
// The vertical coordinate of the window 
screenX 
// Same as screenLeft but needed for some browsers 
screenY 
// Same as screenTop but needed for some browsers 
self 
// Returns the current window 
status 
// Sets or returns the text in the statusbar of a window 
top 
// Returns the topmost browser window
// Screen Properties:-
availHeight 
// Returns the height of the screen (excluding the Windows Taskbar) 
availWidth 
// Returns the width of the screen (excluding the Windows Taskbar) 
colorDepth 
// Returns the bit depth of the color palette for displaying images 
height 
// The total height of the screen 
pixelDepth 
// The color resolution of the screen in bits per pixel 
width 
// The total width of the screen

// #EVENTS
// Mouse Events:-
onclick 
// The event occurs when the user clicks on an element 
oncontextmenu 
// User right-clicks on an element to open a context menu 
ondblclick 
// The user double-clicks on an element  
onmousedown 
// User presses a mouse button over an element 
onmouseenter 
// The pointer moves onto an element 
onmouseleave 
// Pointer moves out of an element 
onmousemove 
// The pointer is moving while it is over an element 
onmouseover 
// When the pointer is moved onto an element or one of its children 
onmouseout 
// User moves the mouse pointer out of an element or one of its children 
onmouseup 
// The user releases a mouse button while over an element 
onwheel 
// Mouse wheel rolls up or down over an element
// Keyboard Events:-  
onkeydown 
// When the user is pressing a key down  
onkeypress 
// The moment the user starts pressing a key 
onkeyup 
// The user releases a key 
// Frame Events:- 
onabort 
// The loading of a media is aborted 
onbeforeunload 
// Event occurs before the document is about to be unloaded 
onerror 
// An error occurs while loading an external file  
onhashchange 
// There have been changes to the anchor part of a URL 
onload 
// When an object has loaded 
onpagehide 
// The user navigates away from a webpage 
onpageshow 
// When the user navigates to a webpage 
onresize 
// The document view is resized 
onscroll 
// An element’s scrollbar is being scrolled 
onunload 
// Event occurs when a page has unloaded
// Drag Events:-
ondrag 
// An element is dragged 
ondragend 
// The user has finished dragging the element 
ondragenter 
// The dragged element enters a drop target 
ondragleave 
// A dragged element leaves the drop target 
ondragover 
// The dragged element is on top of the drop target 
ondragstart 
// User starts to drag an element 
ondrop 
// Dragged element is dropped on the drop target 
// Clipboard Events:- 
oncopy 
// User copies the content of an element 
oncut 
// The user cuts an element’s content  
onpaste 
// A user pastes content in an element 
// Media Events:  
onabort 
// Media loading is aborted 
oncanplay 
// The browser can start playing media (e.g. a file has buffered enough) 
oncanplaythrough 
// When browser can play through media without stopping 
ondurationchange 
// The duration of the media changes 
onended 
// The media has reached its end 
onerror 
// Happens when an error occurs while loading an external file 
onloadeddata 
// Media data is loaded 
onloadedmetadata 
// Meta Metadata (like dimensions and duration) are loaded 
onloadstart 
// Browser starts looking for specified media 
onpause 
// Media is paused either by the user or automatically 
onplay 
// The media has been started or is no longer paused 
onplaying 
// Media is playing after having been paused or stopped for buffering 
onprogress 
// Browser is in the process of downloading the media  
onratechange 
// The playing speed of the media changes 
onseeked
// User is finished moving/skipping to a new position in the media 
onseeking 
// The user starts moving/skipping 
onstalled 
// The browser is trying to load the media but it is not available 
onsuspend 
// Browser is intentionally not loading media 
ontimeupdate 
// The playing position has changed (e.g. because of fast forward) 
onvolumechange 
// Media volume has changed (including mute) 
onwaiting 
// Media paused but expected to resume (for example, buffering) 
// Animation Events:- 
animationend 
// A CSS animation is complete 
animationiteration 
// CSS animation is repeated 
animationstart 
// CSS animation has started 
// Other Events:-
transitionend 
// Fired when a CSS transition has completed 
onmessage 
// A message is received through the event source  
onoffline 
// Browser starts to work offline 
ononline 
// The browser starts to work online 
onpopstate 
// When the window’s history changes 
onshow 
// A <menu> element is shown as a context menu 
onstorage 
// A Web Storage area is updated 
ontoggle 
// The user opens or closes the <details> element 
ontouchcancel 
// Screen touch is interrupted 
ontouchend 
// User finger is removed from a touch screen 
ontouchmove 
// A finger is dragged across the screen 
ontouchstart 
// Finger is placed on touch screen

// #More Js Important Methods



// #Errors
try // Lets you define a block of code to test for errors 
catch // Set up a block of code to execute in case of an error  
throw // Create custom error messages instead of the standard JavaScript errors 
finally // Lets you execute code, after try and catch, regardless of the result 
// Error Values:-
name // Sets or returns the error name 
message // Sets or returns an error message in string from 
EvalError // An error has occurred in the eval() function 
RangeError // A number is “out of range” 
ReferenceError // An illegal reference has occurred 
SyntaxError // A syntax error has occurred 
TypeError // A type error has occurred URIError An encodeURI() error has occurred

// #AJAX
// What is AJAX? (AJAX => Asynchorous JavaScript And XML) is a part of Js allows Js to communicate with the server by making http request without having to leave or reload or refresh that page(Ex: when u zoom in on google maps AJAX go to the server and bring that zoom information without refreshing the page).

async function name(paramrs) { statements };
// Define async functions inside expressions.

//   *** HTTP Request *** 
// Step 1: HTTP Request Setup
// Create Http Request:
const get = () => {
    
    // Use XHR objects to interact with the server
    const request = new XMLHttpRequest();
    
    // Attatch event listen to fire a function when the state of this requist change
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request, request.responseText);
        } else if (request.readyState === 4) {
            console.log('Could not fitch the data');
        }
    });

    // Set the request
    request.open('method', 'url', async);
    
    // Initiates the request
    request.send();
};

get(); // Callig


// TODO: what is callback function? its a function fire when something is complete.

// Step 2: Write a Callback function to excute when this task is complate
const get = (callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch the data', undefined);
        }
    });

    request.open('method', 'url', async);
    request.send();
};

get((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// The simplest way to send asyn Http Request:
const xhr = new XMLHttpRequest();
xhr.open('GET', 'url', true);
xhr.onload = function(e){
    if (xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
    } else {
        console.error(xhr.statusText);
    }
};
xhr.onerror = function (e) {console.error(xhr.statusText); };
request.send(null);

//  *** Promises *** 
const getData = () => {
    return new promise((resolve, reject) => {
        // fetch something
        resolve(data);
        reject(err);
    });
};

// Type-One of Peomise callback function
getData().then((data) => {
    // this code will excute only if the above promise is resolve
    console.log('the getData Promise is resolved');
}, (err) => {
    // this code will excute only if the above promise is reject
    console.log('the getData Promise is rejected');
});
// Type-Two of Promise callback function
getData().then((data) => {
    console.log('the getData Promise is resolved');
}).catch(err => { console.log(err); });

// Promise Simple Example:
const myPromise = (resource) => {
    const request = new XMLHttpRequest();

    return new promise((resolve, reject) => {        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                reject(err);
            }
        });

        request.open('GET', resource);
        request.send();
        });
};

myPromise('todo.json').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Promise More Complixe Example (No callback hill):
const myPromise2 = (resource) => {
    const request = new XMLHttpRequest();

    return new promise((resolve, reject) => {        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                reject(err);
            }
        });

        request.open('GET', resource);
        request.send();
        });
};

myPromise2('todo1.json').then(data => {
    console.log('promise 1 resolve:', data);
    return myPromise2('todo2.json');
}).then(data => {
    console.log('promise 2 resolve:', data);
    return myPromise2('promise 3 resolve:', data);
}).then(data => {
    console.log('promise 3 resolve:', data);
}).catch(err => {
    console.log(err);
});

//  *** Fetch API *** 
// Fetch API is a new featcher in js its allow you to make http request and automtic promises more easy.

fetch(input: RequestInfo, init ?: RequestInit): Promise < Response >
// fetch method take request soures as an input and return to us a promise(resolve, reject).

return response.json()
// this method gets the resopnse object data (json data) and return a promise with that json data file. 

    // fetch Example:
    fetch('todo.json').then((response) => {
        console.log('fetch fun returned a resolved promise');
        return response.json(); /* if response.json promise return resolve then we have the json data that we need, and we can run then() callback method to do something after resiveing this data succusfully NOTE: if this method return a reject then the catch method will handell it*/
    }).then(data => {
        // this method fire when the response.json() promise return a resolve data
        console.log(data);
    }).catch((err) => {
        console.log('fetch fun returned a rejected promise');
    });

//  *** async & await *** 
async
// a keyword to create Async function. 
// NOTE: async function always return a promise and they are none blocking for the rest of the code inside it.
await
// a keyword mean to wait until the promise resolve and then do something.
    
[rv] = await expression
// this mean run the 'expression' and "wait" for a the "return of the expression Promise".
// NOTE: await only can be used inside an async function within regular JavaScript code thats reurn a Promse.

// async & await Example:
const getTodos = async() => {
 
 const response = await fetch('todo.json');
 if (response.status !== 200) {
  throw new Error('Source URL is not valid');
 }

 const data = await response.json();

 return data;
};

getTodos()
 .then(data => console.log('resolved: ', data))
 .catch (err => console.log('rejected: ', err.message));

 
// Nested async & await Example:
const getTodos2 = async() => {
 const response = await fetch('todo2.json');
 const data = await response.json();

 return data;
};

getTodos2()
 .then(data => console.log('resolved:',data))
 .catch(err => console.log(err));

// *** API Methods  ***

JSON.parse()
// Converts a JSON string into an Js value/object.

JSON.stringify()
// Converts Js value/object into JSON string.


URLSearchParams()
// create an search params object
window.location.search
// return the value of the query paramiter value in the URL














//                                                             *
//                                                           *****
//                                                        ***********
//                                                     *****************
//                                                  ***********************
//                                               ******************************
//                                            *************************************
//                                       ***********************************************
//                                    *****************************************************
//                                  *********************************************************
//                                  * * *                                                   *
//                                  * *                      jQuery                       * *
//                                  *                                                   * * *
//                                  *********************************************************
//                                    *****************************************************
//                                       ***********************************************
//                                            *************************************
//                                               ******************************
//                                                  ***********************
//                                                     *****************
//                                                        ***********
//                                                           *****
//                                                             *

// What is jQuery? jQuery is a javaScript library contain a ready to use functions and methods.
// its the most popular library btween other Js libraries like (MooTools) and (Modernizr).

// Important jQuery Methods => www.jquery.com/documantion
$() // jQuery wrap: (jQuery Object)put the element in jQuery object so to let the element access the jQuery methods.
jQuery[0] // jQuery unwrap:(Arrays Object) to get the element out of the jQuery object and but it back to its orignal state so we can use vanilla js on it.
.append() // adds content to bottom of the element.
.prepend() // adds content to top of element.
.before() // adds conternt before element.
.after() // adds content after element.
.html() // changes the whole html of the element.
.text() // changes the text of the elemetnt.
.wrap() // wrap all matchtes element indiviualy.
.unwrap() // unwrap all matchtes element.
.wrapall() // wrap all elements combined with 1 single element.
.empty() // empties the inner html of an element.
.remove() // removes the element itself completely.
.css({}) // read or set css style of an element.
.animate({ keyframe }, time, mothion, callback()); // read or set css keyframe animation.
.fadeOut() .fadeIn() .fadeTo()
.removeAttr() // removes an attribute completely.
.att() // read or set attributes.
.removeClass() // removes a class from the matches elements.
.addClass() // adds a class to the matched elements.
.toggleClass() // toggles the class on and off on ther matched elements.
.on("event", function(){}) // binds an event listner to an elements and fire a function when that event accores.
.event(function(){}) // A short hand of .on() method.
.off() // unbinds an event listner from an elements.
.hide(1000) // hide the element. and fade it out by a nice animate.
.show(1000) // show the element. and fade it in by a nice animate.
.toggle(1000) // toggle the display of the element (show/hide).
.slideUp(speed) // animates hides the element by making its height = 0.
.slideDown(speed) // animates show the element by making its height = auto.
.slidetoggle(speed) // toggle the display of the element (slideup/slidedown).











//                                                             *
//                                                           *****
//                                                        ***********
//                                                     *****************
//                                                  ***********************
//                                               ******************************
//                                            *************************************
//                                       ***********************************************
//                                    *****************************************************
//                                  *********************************************************
//                                  * * *                                                   *
//                                  * *                       JSON                        * *
//                                  *                                                   * * *
//                                  *********************************************************
//                                    *****************************************************
//                                       ***********************************************
//                                            *************************************
//                                               ******************************
//                                                  ***********************
//                                                     *****************
//                                                        ***********
//                                                           *****
//                                                             *

// What is JSON? JSON is just a way of organizing data & works well with AJAX.