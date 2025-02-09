let a = new Array [1,2,3];
a.length = 1;

var b = ["monkeys", "cats", "dogs"];
console.log(b.join("|"));

a1 = [[1,2,3],[4,5,6],[7,8,9]];
const a2 = a1.flat(Infinity) //o/p: [1,2,3,4,5,6,7,8,9]

//function
function myfunc(p1, p2){
    return p1*p2;
}

const myfunction = function (a,b) {a**b};
const myf = new Function (a, b, a**b);

let monkey = ['a','b','c','d']
monkey.length = 2;
console.log(monkey); //

//html dom
// Your actions - methods
//the values set - properties

//document.getElementById (id) ---> Find an element by element id
//document.getElementByTagName (name) ---> Find an element by element tag name
//document.getElementByClassName (name) ---> Find an element by element's Class name

/* Change HTML Elements
1. element.innerHTML = new html content ---> change the inner HTML of an element
2. element.attribute = new/change attribute 
3. element.style.property = 

method:
element.setAttribute(attribute, value) */

/*Adding and Deleting Elements

create  --> d.createElement(element)
remove ---> d.removeChild(element)
Adding  --> d.appendChild(element)
Replace --> d.replaceChild(element)
            d.write(text)  --> write into the HTML Output */

//add event handlers using DOM
//method
/* d.getElementById(id).onclick = function(){code} */

/* Finding HTML Objects:
1. returning the <a> elements: document.anchors*/

//element by ID
const ele1 = document.getElementById("title");

//element by tag name
const ele2 = document.getElementsByTagName("p");

//by class name
const ele3 = document.getElementsByClassName("class");

//css selector
const ele4 = document.querySelectorAll("p.class");

//HTML Object collections
const ele5 = document.forms("form");
let p = "";
let i=0;
for (i=0; i<ele5.length; i++){
    p += ele5.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = p;

//Changing HTML Document using attribute


//Dynamic HTML Content



