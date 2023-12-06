// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
//********************************************************************************* */

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

//let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

//************************************************************************************** */
// for of

// ["", "", ""]
// [{}, {}, {}]

//const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//********************************************************************************** */
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }



/*



Notes:-

Diffrence between for -in or for -of loops ?
for -in

The loop iterates over all enumerable properties of an object, including properties in the prototype chain.
It iterates over the property names, not the values.


for -of

Purpose: Used for iterating over iterable objects, such as arrays, strings, maps, sets, etc.
The loop iterates over the values of the iterable, not the property names.
It works with any object that has a [Symbol.iterator] method, making it suitable for arrays, strings, maps, sets, etc.
It does not iterate over properties in the prototype chain.


In summary, whether an object is iterable or not depends on the presence of the [Symbol.iterator] method. If the method is present, the object is iterable, and you can use it with iterable constructs like for...of loops. If the method is not present, the object is not iterable, and attempting to use it in a for...of loop will result in an error.






 */

const array = [1, 2, 3];

// The array object has a built-in [Symbol.iterator] method
const iterator = array[Symbol.iterator]();

for (let value of iterator) {
  console.log(value); // Outputs: 1, 2, 3
}


const iterableObject = {
    [Symbol.iterator]() {
      let index = 0;
      const data = [1, 2, 3];
  
      return {
        next() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
  
  // Now, you can use a for...of loop to iterate over iterableObject
  for (const value of iterableObject) {
    console.log(value);
  }
  