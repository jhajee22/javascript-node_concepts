//Write a function sayHello(name, callback) that prints "Hello, name!" and then calls callback()




function sayHello(name,callback){
    console.log(`Hello,${name}`); // print greeting
    callback(); // calling the callback function
}

//Define a callback function

function afterGreeting(){
    console.log("Callback Function executed");
}
function secondCallback(){
    console.log("Second Callback executed");
    
}


function thirdCallback(){
    console.log("Third Callback Executed");
    
}


//call sayHello with a name and a callback function
sayHello("Saurav",afterGreeting);
sayHello("Neha",secondCallback);
sayHello("Sumit",thirdCallback);