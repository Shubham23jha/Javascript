const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);//current context ko exicute karta he
    }

}

user.welcomeMessage()//hitesh , welcome to website
user.username = "sam"
user.welcomeMessage()//sam , welcome to website

//console.log(this);//{} but in browser it will gibve window object


/*
const shubham = {
    username: "Shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${username} , welcome to website`);//username is not defined
        console.log(this);//current context ko exicute karta he
    }

}
shubham.welcomeMessage()//
shubham.username ="Suhani"
shubham.welcomeMessage()//
*/






// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    //console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//implicit

const addTwo = (num1, num2) => ({username: "hitesh"})//return object


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

(function chai(){
    // named IIFE
    console.log("hello");
})();// this is most important because iife not know where is endpoint





( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shubham')

//global scope se polute hoti he kayi bar

// why we use iife?
//  IIFE is used for encapsulating code, avoiding global scope pollution, and creating private scopes for variables. It is a useful pattern for achieving modularity, data privacy, and maintaining clean and organized code.

