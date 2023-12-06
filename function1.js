//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//Hosting

console.log(addone(5))

function addone(num){
    return num + 1
}

//Above code will work 



/*
addTwo(5)
const addTwo = function(num){// but this code will not work and thi is also a diffrence between normal and expression function in this we write addTwo above the decleraration of expression function here give error of "Cannot access 'addTwo' before initialization"this is called hosting. 
    return num + 2
}

*/

//Hosting notes:-
/* 
firstly life cycle of variable
Declaration –> Initialisation/Assignment –> Usage
let a;                  // Declaration
a = 100;            // Assignment
console.log(a);  // Usage

What is hosting?


Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

Features of Hoisting:
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
It allows us to call functions before even writing them in our code. 
Note: JavaScript only hoists declarations, not initializations.

JavaScript allocates memory for all variables and functions defined in the program before execution.


Note: Always remember that in the background the Javascript is first declaring the variable and then initializing them. It is also good to know that variable declarations are processed before any code is executed. 
However, in javascript, undeclared variables do not exist until the code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that all undeclared variables are global variables.
examples: a =10; this will treat as global variable.


Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization. But variables declared with var are hoisted WITH a default initialization of undefined.




*/

console.log("hii");
console.log(ah);//Cannot access 'ah' before initialization
let ah =5;//in this in 99 line ah :undefined but in seprate storage but in 100 ah:5 which show that from  99 to 100 variable ah in temproral dead zone.in which variable is undefined but we cannot access until initiallisation happens.//refrence error.




var b ;
console.log(b);//undefined
b=5;


console.log(c);//undefined
var c; //this happen because memory located with var attached to the global object but in case of let and const they are allocate diffrent memory space not global object and we cannot access wihout we put any value in them.var decleration attached with window object but let and const store in seprate storage so they not attached with window object.var is stored in global space but not for let and const.global object is window ob

// console.log(d);// Cannot access 'd' before initialization
// let d;

console.log(d);// d is not defined
d=10;
/*
syntax error 
let a=4;
let a=5 ;
in this above code is also not running.
*/
/*
TypeError
const a;//a is not decleared here



*/
//https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/#:~:text=Variables%20declared%20with%20let%20or%20const%20are%20hoisted%20WITHOUT%20a,a%20default%20initialization%20of%20undefined.