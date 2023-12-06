let a = "Shubham";
//In this case, a is a string literal. String literals are created by enclosing text in double or single quotes. It's a straightforward and common way to create strings in JavaScript.
console.log(a);//Shubham
console.log(typeof(a));//string
let b = new String("Shubham");// By using this we can make this as Object 
// String {'Shubham'}0: "S"1: "h"2: "u"3: "b"4: "h"5: "a"6: "m"length: 7[[Prototype]]: String[[PrimitiveValue]]: "Shubham"
console.log(b);//[String : 'Shubham']
console.log(typeof(b));//object


console.log(a[3]);
let c = b.substring(0, 4)//its not take negative value

console.log(c);
let d = b.slice(-6,2);//its take negative value
console.log(d);
let e ="     Shubham   "
console.log(e);
console.log(e.trim());

//      Shubham
// Shubham
console.log(a[0]);
console.log(a.trim());
// Here, b is created using the String constructor as an object. When you create a string using the String constructor, you create a String object rather than a primitive string. While it's less common to create strings this way, it allows you to access string-related methods and properties that are part of the String object.

// However, it's important to note that in most cases, using string literals (method 1) is recommended because it's simpler and more efficient. String objects (method 2) introduce unnecessary complexity unless there's a specific need to work with the string as an object.

// In your example, for typical string operations, you can treat both a and b the same way because JavaScript automatically converts the string object to a primitive string when necessary. For example:
console.log(a.length);  // Outputs: 7
console.log(b.length);  // Outputs: 7

console.log(a === b);   // Outputs: false
console.log(a==b); // Outputs:true

//replace include
let url ="http://example%20Shubham.com"
console.log(url.replace('%20', '_')); //http://example_Shubham.com
console.log(url.includes("Shubham"));//true
console.log(url.includes("Suhani")); //false
console.log(url.split("%20"));//[ 'http://example', 'Shubham.com' ]
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"
let s = str.split(' ',3);
console.log(s);//[ 'The', 'quick', 'brown' ]
let Ex = str.split(' ');
console.log(Ex);
/*[
  'The',   'quick',
  'brown', 'fox',
  'jumps', 'over',
  'the',   'lazy',
  'dog.'
] */

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
/*

IMPORTANT NOTE:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

*/
const name = "Shubham"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is Shubham and my repo count is 50
