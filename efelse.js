var bool = true;
console.log(typeof bool);
var num = "2";
console.log(typeof num);
var num = null;
console.log(typeof num);

let myName;
let myAge;

myName = "Chris";
myAge =  "24";

console.log(myName);
myName = "Nitesh";
console.log(myName);

let firstName ="Niteshhh";

let LastName ="Mashal";

let middle_name = "Kumar";

console.log(firstName);

const price = 44;

var cardNuber = "3554235235";

var isPaid = true;

var modeOfPayment;
modeOfPayment = "Mode of Payment";

console.log(firstName + "sucessfully bought" +  " using " + modeOfPayment);








var x = 52, y=23;
x = x%y;

var a = 10, b = 2;
a = a**b;
console.log(a);

var x = 3 == 3;
console.log(x);

var x = 2 == 3;
console.log(x);

var x = 3 != 3;
console.log(x);

var x = 3 !== 3;
console.log(x);
var x = 7;
var x = 7 > 5;

var x = 5                                                          
x = x++;

console.log(x);

if(5*2==10){
    console.log("correct");
    
}else{console.log("inc")}

var time = 9
if(time>1 && time<8){
    console.log("good morning");
}
else{
    console.log("good luck")
}



var fruittype = ("kya chahiy");


switch(fruittype){
    case 'Narangi':
        console.log('narangi 38');
        break;
        case 'sabe':
            console.log('sabe 42');
            break;
            case 'kele':
                console.log('kele20');
                break;
                default:
                    console.log('${fruittype} aaj khatam') 
    
}

for(let i=0; i<10; i++){
console.log("namaste world")
}

for (let i = 5; i<51; i = i+5){
    console.log(i);
}
for( let i = 50; i>4; i = i-5){
    console.log(i);
}
for (let i = 0; i<10; i++){
    if(i%2==0)
    console.log(i);
    else(i);
}
for (let i=0; i<10; i++){
    console.log("namsteeee");
    
}
{
let i = 0;
while(i<10){
    console.log("masteeeee");
    i++
}
}
{
let g = 10;
while(g>=0){
    console.log("teeeee");
    g--
}
}

{
    for(let i=0; i<5; i++){
        console.log(i)
    }
}
{
    let i=0;
    while (i<5){
        console.log(i);
        i++
    }
}

{
    let i=10;
    do{
        console.log("namaste world")
        i++
    }
    while(i<10){

    }
}
//for in loop
//objects
{
    let animal ={
        name: "zebra",
        leg:4
    };
    for(let key in animal){
        console.log(key, animal[key])

    }
   
    console.log(animal["leg"])
}
//array
{
    let names = ["Rahul", "Neha", "Aman"];
    for(let index in names){
    console.log(index, names[index]);
    }

    for(let name of names){
        console.log(name);
    }
}

{
    let names=[ "haris", "ashish", "suman"];
    for(let index in names){
    console.log(index, names[index])
}
}

"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter your name:");
console.log('Hello ${name}');
