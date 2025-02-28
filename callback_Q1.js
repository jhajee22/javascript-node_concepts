// Create a function doubleArray(arr, callback) that doubles each number using .map().

function doubleArray(arr,callback){
const doubledArr = arr.map(num =>num*2);
console.log(doubledArr);
callback();
}

function done(){
    console.log("Double Array Created Successfully");
}

doubleArray([1,2,3,4,5,6],done);