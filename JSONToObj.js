//JSON to OBJECT
const jsonString='{"name":"john","age":30,"city":"Patna"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);    
//OBJECT to JSON
const objetTOconvert = {
    name:"Alice",
    age:25
};
const jsonStringified = JSON.stringify(objetTOconvert);
console.log(jsonStringified)