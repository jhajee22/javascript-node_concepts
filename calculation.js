//Implement a calculate(a, b, callback) function where
//  callback performs an operation (addition, subtraction, etc.)

function calculate(a,b,callback){
    
    callback(a,b);
}

function add(x,y){
    console.log(x+y) ;
}
 function subtract(x,y){
    console.log(x-y);
 }
 calculate(10,5,add);
 calculate(10,5,subtract);