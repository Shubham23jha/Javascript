/*
Does javascript have OOPS?
Yes, JavaScript has a concept of classes that was introduced with ECMAScript 6 (ES6), which was finalized in 2015. Before ES6, JavaScript used prototype-based inheritance, but the introduction of classes provided a more familiar syntax for developers coming from other object-oriented programming languages.
*/


const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
user.username = "Shubham";
console.log(user.getUserDetails());
/*
{
  username: 'Shubham',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}

*/



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
//console.log(userTwo);


/*
instanceof :-)

The instanceof operator in JavaScript is used to check whether an object is an instance of a particular class or constructor function. It returns true if the object is an instance of the specified class or constructor, and false otherwise.

In JavaScript, the new keyword is used to create an instance of an object, typically an instance of a constructor function or a class. When you use the new keyword with a constructor, it does the following:


new :-)

Creates a new empty object.
Sets the prototype of the new object to be the prototype of the constructor function or class.
Calls the constructor function or class with the newly created object as the value of this.
Returns the newly created object.
Here's an example using a constructor function:



function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 30);
console.log(john.name); // Output: John
console.log(john.age);  // Output: 30



And here's an example using a class:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const jane = new Person('Jane', 25);
console.log(jane.name); // Output: Jane
console.log(jane.age);  // Output: 25



In both cases, the new keyword is used to create an instance (john and jane) of the Person constructor or class.

It's important to use the new keyword when creating instances of constructor functions or classes to ensure that the correct object initialization and prototypal inheritance mechanisms are applied. If you forget to use new, unexpected behavior may occur, or the code might not work as intended.




*/