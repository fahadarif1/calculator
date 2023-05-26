// // chapter 1

// alert("First Name");
// alert("Last Name");
// alert("Email");
// alert("Phone Number");
// alert("Password");

// alert("You're learning JavaScript!");

// alert("Hello ! Jawan Pakstan")

// // chapter 2

// myVariable = 10

// myVariable
// myVariable = "Hello, world!"

// var teamName;
// teamName = "OpenAI Team";
// alert(teamName);

// var bestMan = "Charlie";
// bestMan = "John";


// // chapter 3


// var caseQty;

// var caseQty;
// caseQty = 144;

// var num = parseInt("9");

// var sumResult;
// sumResult = 5 + 7;


// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;

// var myNumber = 5;
// myNumber = myNumber + 3;

// // chapter 4

// var productCost = 3.45;

// var nameofband;

// var myNumber = 42;


// var firstName = "Chat";
// var lastName = "GPT";
// var fullName = firstName + lastName;




// // chapter 5

// var remainder = 10 % 3;

// var largeNum = 1000 * 2000;

// var num1 = 10;
// var num2 = 5;
// var result = num1 - num2;

// chapter  6

// var num 10;
// var newNum = num--;

// var num1 = 10;
// var num2 = ++num1;

// var num = 5;
// Number ++;
// alert("the value is :"+ number)

// chapter 7

// var calculatedNum = (2 + 2) * (4 + 2);
// console.log(calculatedNum);

// var calculatedNum = (2 + 2) * 4) + 2;
// console.log(calculatedNum);


// """""""""""""""""""""""""""""""""""NEW WORK sat""""""""""""""""""""""""""""""""""""""""""

// var day = "mon"

//  switch(day){
//     case "mon":
//         alert("Monday");
       
//         case "tue":
//             alert("Tuesday");
         
//             case "wed":
//                 alert("Wednesday");
               
//                 case "Thu":
//                     alert("Thursday");
                
//                     case "Fri":
//                         alert("Friday");
                 
//                         case "sat":
//                             alert("Saturday");
                            
                            
//                             case "sun":
//                                 alert("Sunday");
//                                 break;
//                                 // default:
//                                 // alert ("Default Set")
//  }


// """""""""""""""""""""""""""""""""""second """""""""""""""""""""""""""""""""""""""""

// var i = 0;
// while(i < 10) {
// console.log(i);
// i++;
// }

// var i = 0;
// do  {
// console.log(i);
// i++;
// } while (i < 0);


// """""""""""""""""""""""""""""""""""new work monday"""""""""""""""""""""""""""""""""""""""""""""""""""""

// function abc(message){
//     console.log(message);
// }


// """""""""""""""""""""""""""""""""""""""""second""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

// function changeImage(img){
//     var image2Url =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccAUbsX5rEZUPfzQmOHTb_7fptbxzx2Szvi2akXSGKQ&s";

//     img.src = image2Url;


//     console.log(img);


// """""""""""""""""""""""""""""""""""""""""""""third"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

// var img1 =

// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccAUbsX5rEZUPfzQmOHTb_7fptbxzx2Szvi2akXSGKQ&s";

// var img2 =

//    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";


// function changeImage1(img){
//     img.src = img1;
// }
// function changeImage2(img){
//     img.src = img2;
// }

// """""""""""""""""""""""""""""""""four"""""""""""""""""""""""""""""""""""""""""""""""""""


// var inp1 = document.getElementById("firstName");
// var inp2 = document.getElementById("secondName");
// var inp3 = document.getElementById("thirdName");
// var inp4 = document.getElementById("fourName");
// var inp5 = document.getElementById("fiveName");

// function register() {
//     console.log(inp1.value);
//     console.log(inp2.value);
//     console.log(inp3.value);
//     console.log(inp4.value);
//     console.log(inp5.value);
// }


// """""""""""""""""""""""""""""""""""""five"""""""""""""""""""""""""""""""""""""""""""""""""

// var inp = document.getElementById("firstName");
// var disp = document.getElementById("display")
// var inp = document.getElementById("secondName");
// var disp = document.getElementById("display")

// function register(){
//     console.log(inp.value);
//     disp.value = inp.value;
// }


// """""""""""""""""""""""""""""""""new work""""""""""""""""""""""""""""""""""""""""


// function add(num1, num2) {
//     return num1 + num2;
//   }
  

//   function subtract(num1, num2) {
//     return num1 - num2;
//   }
  
//   function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
  
//   function divide(num1, num2) {
//     if (num2 === 0) {
//       return "Error: Division by zero is not allowed.";
//     }
//     return num1 / num2;
//   }
  
//   console.log(add(5, 3)); 
//   console.log(subtract(5, 3)); 
//   console.log(multiply(5, 3)); 
//   console.log(divide(5, 3)); 
//   console.log(divide(5, 0));

// """""""""""""""""""""""""""""""""""""calculator"""""""""""""""""""""""""""""""""""""""""""""""""


//            Javascript          // 

var display = document.getElementById("display");
function getValue(num) {
display.value += num;
}
function calculateValue() {
console.log(display.value);
var ans = eval(display.value);
display.value = ans;
}
function clearAll() {
display.value = "";
}