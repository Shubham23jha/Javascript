// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(typeof(myArr));//Object 
console.log(typeof(myArr2));//Object
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

/*
    It seems like you've written a line of code using the join method on an array. The join method in JavaScript is used to join all elements of an array into a string. When you call join() with no arguments, it uses a default separator, which is a comma (,).

Here's an example:

*/
const a = [1, 2, 3, 4, 5];
const b = a.join();

console.log(b);
// Output: "1,2,3,4,5" (a string where array elements are joined with commas)


/*
    In this example, the join() method converts the array myArr into a string, where each element is separated by a comma. If you want to use a different separator, you can pass it as an argument to the join method. For example:

*/
const aa= [1, 2, 3, 4, 5];
const newArr = aa.join('-');

console.log(newArr);
// Output: "1-2-3-4-5" (a string where array elements are joined with hyphens)



// console.log(myArr);
// console.log( newArr);


// slice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);
/*
    slice method:

The slice method is used to extract a portion of an array and return it as a new array.
It does not modify the original array; instead, it creates a shallow copy of the selected elements.
The slice method takes two optional parameters: start and end. The start parameter is the index at which to begin extraction, and the end parameter is the index at which to stop extraction (not inclusive).
If no end parameter is provided, slice extracts up to the end of the array.
*/

const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array is unchanged)





//splice
/*
    splice method:

The splice method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
It modifies the original array.
The splice method takes three parameters: start (the index at which to start changing the array), deleteCount (the number of elements to remove), and items (optional, the elements to add to the array).
If only start and deleteCount are provided, it removes elements from the array. If items are provided, it removes elements and inserts the new elements.

*/
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const removedElements = originalArray.splice(1, 2, 6, 7);

console.log(removedElements); // Output: [2, 3] (elements removed from the original array)
console.log(originalArray); // Output: [1, 6, 7, 4, 5] (original array modified)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting

//[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]