function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){//if (username===undefined) ka short form he if(username) this value is false because undefined is false value so we negate this.
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

 // REST OPERATOR
// function calculateCartPrice(val1, val2, ...num1){


//     console.log(val1);//200
//     console.log(val2);//400
//     return num1
    
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]


/*function calculateCartPrice(...num1,val1 ,val2){

                                        // this will not work because"A rest parameter must be last in a parameter list"
    console.log(val1);//200
    console.log(val2);//400
    return num1
    
}*/

console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
/*

The terms "rest" and "spread" in JavaScript are often associated with the use of the ellipsis (...) operator, but they serve different purposes in different contexts.

Rest Operator:

The rest operator (...) is used in function parameters to collect all the remaining arguments into a single array.

It is used in the parameter list of a function to represent an indefinite number of arguments as an array.

The rest parameter syntax looks like this:

*/
function myFunction(param1, param2, ...restOfTheParams) {
    // param1 and param2 are regular parameters
    // restOfTheParams is an array containing the rest of the parameters
  }

/*

Spread Operator:

The spread operator (...) is used to spread the elements of an array or object into another array or object, or the elements of an iterable (like a string) into an array.

It is used in various contexts such as array literals, function arguments, and object literals.

The spread syntax looks like this:


 */

const newArray = [...oldArray]; // Spread elements of oldArray into newArray
const newObj = { ...oldObj }; // Spread properties of oldObj into newObj
