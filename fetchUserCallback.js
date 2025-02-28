//Problem Statement
// You are developing a system where you need to fetch user details from a database. 
// Since fetching data takes time, you must use a callback function to execute a specific
//  operation after retrieving the user data.

// 🔹 Requirements:
// 1️⃣ Implement a function fetchUserData(userId, callback) that simulates fetching user details
//      (id, name, age, subscription status) with a 2-second delay using setTimeout().
// 2️⃣ After fetching the user data, the function should call the provided callback function with the user data.
// 3️⃣ Perform the following operations as callbacks after fetching user data:

// Send a Welcome Email → Print "Hello [User Name], welcome to our platform!"
// Update Last Login Time → Store the current timestamp as the last login time.
// Check Subscription Status → Print "Subscription is active" if subscribed, otherwise "No active subscription".
// 4️⃣ Call fetchUserData() with different callbacks for different users.

//Solution 

const users = [
    { id: "CF18035", name: "Saurav Jha", age: 26, subscribed: true },
    { id: "CF18036", name: "Shushant Kumar", age: 26, subscribed: false },
    { id: "CF18037", name: "Suriya Kumar", age: 33, subscribed: true },
    { id: "CF18038", name: "Sriram", age: 32, subscribed: false }
  ];
  

function fetchUserData(userId,callback){
console.log("Fetching User Data.........");

setTimeout(() =>{
    const user = users.find(user =>user.id===userId);
    if(user){
        console.log(`User data fetched:`,user);
        callback(user);
    }else{
        console.log(`User with ID ${userId} not found.`);
    }
},2000);   
}

//callback functions

function sendwelcomeEmail(user){
    console.log(`Hello ${user.name},Welcome to our platform`)
}

function updateLastLogin(user){
    const lastLogin = new Date().toLocaleString();
    console.log(`Last login time updated for ${user.name}:${lastLogin}`);
}
function checkSubscription(user){
    if(user.subscribed){
    console.log(`Subscription is active for ${user.name}.`);
    }else{
        console.log(`No active subscription for ${user}`);
    }
}
fetchUserData("CF18035",sendwelcomeEmail);
fetchUserData("CF18036",updateLastLogin);
fetchUserData("CF18037",checkSubscription);



