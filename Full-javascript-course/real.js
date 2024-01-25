// console.log("hello");

// window.console.log ("how are you"); 

// document.getElementById("myh1").textContent = 'hello';
// document.getElementById("myp").textContent = ' i like tea';


// let age = 25;
// let price = 1000
// let food = 30;

// console.log(`you are ${age} years old`);
// console.log(`the price is ${price}`);
// console.log(`there are ${food} foods`);


// let firstName = "kingsley";
// let bestColor = "white";
// let bestFood = "yam";

// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// console.log(`your bestColor is ${bestColor}`);
// console.log(`your bestfood is ${bestFood}`);


// boolean

// let online = true;

// let shopNow = false;

// console.log(`kingsley is online: ${online}`);
// console.log(`are you going to shop now: ${shopNow}`);

// let firstName = "kingsley";
// let age = "27";
// let stundent = false;

// document.getElementById("myp1").textContent =`your name is ${firstName}`;
// document.getElementById("myp2").textContent =`you are ${age} years old` ;
// document.getElementById("myp3").textContent = `you are not stundent any more ${stundent}`;


// arithmetic operators

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students + 2;
// students = students / 2;
// students = students ** 2;
// students = students + 1;


// let students = 30;

// students +=1;
// students -=1;
// students *=1;
// students /=1;
// students **=1;
// students %=1;

// students ++;
// students --
// console.log(students);


// let username;

// username = window.prompt ("what is your name");

// document.getElementById("mySubmit").onclick = function (){
//     username = document.getElementById ("myText").value;

//     document.getElementById("myh1").textContent = `Hello ${username}`
//     console.log(username)
// }


// document.getElementById("mySubmit").onclick =function(){
//     username = document.getElementById ("myText").value;

//     document.getElementById("myh1").textContent = `welcome ${username}`
// }

// change a data type of a value

// let x ="food"
// let y ="ball"
// let z ="car"

// x= Number (x);

// y= String (y)

// z= Boolean (z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// COUNTER

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countlabel = document.getElementById("countlabel");

// let count = 0;


// increaseBtn.onclick = function(){
//     count++;

//     countlable.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;

//     countlable.textContent = count;
// }

// resetBtn.onclick = function (){
//     count = 0;
//     countlable.textContent = count;
// }


// Math
// let x=3;
// let y=2;
// let z=1;

// z= Math.round(x);
// z= Math.floor(x);
// z= Math.ceil(x);
// z= Math.pow(x);
// z= Math.sqrt(x);
// z= Math.log(x);
// z= Math.sin(x);
// z= Math.cos(x);
// z= Math.tan(x);
// z= Math.abs(x);
// z= Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min (x,y,z);

// console.log(max);


// RANDOM NUMBER GENERATOR

// let randomNum = Math.random()*6; 

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const mylabel1 = document.getElementById("mylabel1");
// const mylabel2 = document.getElementById("mylabel2");
// const mylabel3 = document.getElementById("mylabel3");

// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function (){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     mylable1.textContent = randomNum1;
//     mylable2.textContent = randomNum2;
//     mylable3.textContent = randomNum3;
// }

// IF STATEMENT
// let age = 30;

// if (age >= 18){
//     alert("you are 18+"
//     );
// }else{
//     alert("you are under 18");
// }

// let man  =16;

// let hasLicense = true;
// if (age >=16){
//     console.log("you are old enough to drive");

//     if (hasLicense){
//         console.log("you have your license")
//     }else{
//         console.log("you do not have license yet")
//     }


// }else{
//     console.log("you must be 16+ to have a license");
// }

// ENTER YOUR NAME 

// const myText = document.getElementById("myText")
// const mybutton = document.getElementById("mybutton");
// const resultElement = document.getElementById("resultElement");
// let age;

// mybutton.onclick = function (){
//     age = myText.value;
//     age = Number (age);

//     if(age >= 100)
//     {

//     resultElement.textContent =`you are too old too enter this site`;
//     }else if (age == 0){
       
//         resultElement.textContent =`you can't enter you were just born `;
//     }
    
//     else if (age >= 18){
        
//         resultElement.textContent =`you are old  enough to enter this site `;
        
//     }else if (  age< 0 ){
        
//         resultElement.textContent =`your age can't below 0 `;
    
//     }else {
        

//         resultElement.textContent =`you must be 18 + to enter this site  `;
//     }
    
// }



// WORKING WITH CHECKED

// CHECK PAYMENT PROJECT


// const checkBox = document.getElementById ("checkBox");
// const visaBtn = document.getElementById ("visaBtn");
// const masterCardBtn = document.getElementById ("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function (){
//     if (checkBox.checked){

//          subResult.textContent = ` You are subscribed!`;

//     }else{
//         subResult.textContent = ` You are Not subscribed!`;
 
//     }

//     if (visaBtn.checked){

//         paymentResult.textContent = `You are paying with visa`;


//     }else if(masterCardBtn.checked){
//        paymentResult.textContent = `You are paying with MasterCard `;
//     }

//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with paypal `;
//      }else {
//         paymentResult.textContent =` You must select a payment type`;
//      }
// }


// TERNARY OPERATOR 


// let age = 10;

// let message = age >=18 ? "you are an adult" : "you are a minor";

// console.log(message);



// let time =12;

// let greeting = time < 12 ? "good morning" : "good afternoon";

// console.log(greeting);


// SWITCH

// let day = "pizza";

// switch (day){
//     case 1:
//         console.log ("it is Monday");
//         break;

//         case 2:
//         console.log ("it is Tuesday");
//         break;

//         case 3:
//         console.log ("it is Wednesday");
//         break;

//         case 4:
//         console.log ("it is Thurday");
//         break;
//         case 5:
//         console.log ("it is Friday");
//         break;
//         case 6:
//         console.log ("it is Saturday");
//         break;

//         case 7:
//         console.log ("it is Sunday");
//         break;

//         default:
//             console.log (`${day} is not day`);
// }

// STRING


// let userName ="Kingsley";

// let result = userName.includes (" ");

// if (result){

//     console.log("Your username can't begin with ' ' ")
// }else {

//     console.log(userName);
// }

// let phoneNumber = " 123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", "");

// console.log(phoneNumber);




// let phoneNumber = " 123-456-789";

// phoneNumber = phoneNumber.padEnd("20", "0");

// console.log(phoneNumber);


// Method Chaining


// let username = window.prompt ("Enter your username"); 

// username = username.trim().charAt(0).toUpperCase()+ username.trim().slice (1).toLowerCase ();

// console.log(username);

// Logical operator = used to commbine or manipulate boolean values 
//  (ture or false)
//   AND = &&
//   OR = ||
// NOT = !=


// AND
// const temp = 20;

// if(temp > 0 && temp <= 30){
//     console.log("the weather is good");
// }else {
//     console.log("The Weather is bad");  
// }


// OR

// const temp = 30;

// if(temp <= 0 || temp > 30){
//     console.log("the weather is bad");
// }else {
//     console.log("The Weather is good");  
// }


// NOT

// const isSunny = true;

// if(!isSunny){
//     console.log ("It is cloudy");

// }else {
//     console.log("it is sunny ");
// }




// = assigment operator 
// == comparison operator (compear if value are equal)
// ===strict equailty operator (compare if value & datatype are equal)
// != inequality operator
// !== strict inequality operator

// example

// == comparison operator (compear if value are equal)

// const PI = 3.14;

// if(PI == "3.14"){
//    console.log("that is pi")
// }else {
//     console.log("that is Not pi")
// }


// ===strict equailty operator (compare if value & datatype are equal)

// const PI = 3.14;

// if(PI === "3.14"){
//    console.log("that is pi")
// }else {
//     console.log("that is Not pi")
// }


// != inequality operator

// const PI = 3.14;

// if(PI != "3.14"){
//    console.log("that is  pi")
// }else {
//     console.log("that is Not pi")
// }


// !== strict inequality operator


// const PI = "3.14";

// if(PI !== "3.14"){
//    console.log("that is pi")
// }else {
//     console.log("that is Not pi")
// }

// while loop = repeat some code WHILE some condition is ture

// let username = "";

// while (username === "" || username === null){
//    username = window.prompt("Enter your name");
// }

// console.log(`hello ${username}`);




// let username;
// do {
//     username = window.prompt("Enter your name");
// }
// while (username === "" || username === null)
  


// console.log(`hello ${username}`);


// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn){
//     username = window.prompt (`Enter your username`);
//     password = window.prompt (`Enter your password`);

//     if(username === "myUserName" && password === "myPassword"){
//    loggedIn = true;
//    console.log ("you are logged in");
//     }else {
//         console.log ("invaild credentials please try again");
//     }
// }

// FOR LOOPS

// for (let i = 10;i > 0; i--){
    
// console.log (i);
// }
//  console.log("happy new year");


// for (let i = 0; i <= 20; i++){

// if(i == 13){
//    continue;
// }else {
//     console.log (i);
// }

    
// }


// for (let i = 0; i <= 20; i++){

//     if(i == 13){
//        break;
//     }else {
//         console.log (i);
//     }
    
        
//     }


    
// NEMBER GESSING GAME 

const minNum = 1; 
const maxNum = 100;
const answer =Math.floor(Math.random () * (maxNum - minNum + 1)) + minNum ;

let attempts  = 0;
let guess;
let running = true;


while (running){
    guess = window.prompt (`guess a number between ${minNum} - ${maxNum}`);
    console.log (typeof guess,guess);
    running = false;
}

        