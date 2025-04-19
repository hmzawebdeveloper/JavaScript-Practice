let user = {
    userName: "Hamza Shah",
    age: 22,
    followers: 1000,
    isOnline: true
}

let { userName, age, followers, isOnline } = user
console.log(`User name: ${userName}, Age: ${age}, Follower: ${followers},Is Online: ${isOnline}`);


// Spread Operator

let fruits = ["apple", "banana", "orange"]
let vegetables = ["carrots", "potato", ...fruits, "tomato", "cabbage"]


console.log(vegetables);

// 2nd example of spread operator"
''
let userInfo = { name: "Hamza", age: "22" }
let updateUser = { ...user, country: "Pakistan", city: "karachi" }
console.log(updateUser);
console.log(userInfo.name);
console.log(userInfo.age);

