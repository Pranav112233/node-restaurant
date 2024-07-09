function callback(){
    console.log('Prince is callinng a callback function');
}
const add = function(a, b, callback){
    var result = a+b;
    console.log('Result is:' +result)
    callback();
    //After result is called, it is calling a callback() function
}
add(3,4,callback);

//OR
add(2, 3, function(){
    console.log('add completed')
});
//OR(Inline)
add(2,3,() => console.log('add completed'));