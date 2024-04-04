console.log(document.getElementById("heading"));

("orange");
heading.style.background = "light-blue";
("light-blue");
heading.style.background = "gray";
("gray");
heading.style.borderRadius = "5rem";
("5rem");
heading.style.textAlign = "center";
("center");


const allList = document.querySelectorAll('li')
undefined
allList
NodeList(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
const converList = Array.from(allList);




const list = document.querySelector('li');
undefined
list.setAttribute("class", "ul");
undefined
const list = document.querySelectorAll('li');
undefined
list.for
undefined
list.forEach((e)=>{e.setAttribute("class", "ul")})