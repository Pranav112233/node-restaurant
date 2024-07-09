const ages = [32,33,12,14];
const result = ages.filter(checkAge);
function checkAge(ages){
    return ages >= 18;
}
console.log(result);

//using prompt
var prompt = require('prompt-sync')();
const age = prompt("Please enter your age");
if(age < 18){
    console.log("No Entry")
}
else{
    console.log("Entry")
}