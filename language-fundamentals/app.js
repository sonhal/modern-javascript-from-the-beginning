// log to console
/*
console.log("Hello world");
console.log({a: 1, b:2});
console.error("Error here")
console.clear();
console.warn("Warning here!");
console.time("hello")
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.timeEnd("hello");
*/


const name = "JohnDoe"
const age = String(45);
console.log(typeof age);


let val = "begin"
val = val.concat(" ", name, age)
console.log(val)


const tempString = `
<ul>
    <li>${name}</li>
</ul>
`

document.body.innerHTML = tempString;

const numbers = [1,2,3,4]
value = numbers.indexOf(4)
numbers.splice(2,6)
console.log(numbers)


const today = new Date("9-19.1981 10:10:00");

val = today;

console.log(val)

b = {
    s: undefined,
    g: 1,
}

if (typeof b.s !== 'undefined'){
    console.log(s)
}


function greet(first = "NAME", last = "LASTNAME"){
    return "Hello " + first + " " + last;
}

console.log(greet(1));

b.f = function(){console.log(this)}
b.f();


// WINDOW

window.console.log("Hello with window reference")
//const input  = prompt();
//alert(input);


if(confirm()){
    console.log("Yes")
}