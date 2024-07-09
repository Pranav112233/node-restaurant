//ASSIGNMENT-1
// var prompt = require('prompt-sync')()
// const age = prompt("Enter Age ");

// if(age < 18)
//     {
//         console.log("20% Discount");
//     }
// if(age > 18 && age <= 65)
// {
//     console.log(`Normal`);
// }
// else{
//     console.log(`30% Discount`);
// } 

//ASSIGNMENT-2
// var prompt = require('prompt-sync')()
// var length = prompt("Enter Length ");
// var breadth = prompt("Enter Breadth ");

// var area = length* breadth;
// console.log(area);

//ASSIGNMENT-3
// const store = {
//     name: "SuperMarket",
//     price: "Affordable",
//     inStock: true,
// }
// console.log(store.inStock);
// console.log(store.price);
// console.log(store.name);

//ASSIGNMENT-4
var arr = ["Annu","Mannu","Sannu","Pannu"];
var prompt = require('prompt-sync')();
var guestName = prompt("What is your name");
if(arr.includes(guestName)){
    console.log("Invited");
}
else{
    console.log("Not Invited")
}