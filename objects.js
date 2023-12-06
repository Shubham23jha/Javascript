// singleton
// Object.create

// object literals

const mySym =  Symbol("key1")
console.log(typeof(mySym));//Symbol


const JsUser = {
    name: "Hitesh",//in browser its access as "name" : "Hitesh"
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//in this case this key is treated as symbol.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday",42]
}

// console.log(JsUser.email)// Method 1
// console.log(JsUser["email"])//method 2
//console.log(JsUser.full name)//thi will give error message
/*
    we dont have access to the full name by method 1 but we have access to by method 2
 */
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

/*
const JsUser = {
  name: 'John',
  age: 25,
};

Object.freeze(JsUser);

// Attempting to modify the object will result in an error in strict mode
JsUser.name = 'Jane'; // This assignment will have no effect in a frozen object

// Attempting to add a new property will also have no effect
JsUser.address = '123 Main St';

// Attempting to delete a property will have no effect
delete JsUser.age;

console.log(JsUser); // The object remains unchanged

*/
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
// output :        |         |
// Hello JS user---|---------
// undefined-------|
// Hello JS user, Hitesh
// undefined
console.log(JsUser.greetingTwo());