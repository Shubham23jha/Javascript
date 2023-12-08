let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


/* comparison */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

/*


Well in short: == inherently converts type and === does not convert type.

Double Equals (==) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.

On the other hand, Triple Equals (===) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type.

OK - so let's help you better understand the difference through a few examples. For each of these, consider what the output of these statements will be.




1-> = =

Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions). The behavior for performing loose equality using == is as follows:

If the operands have the same type, they are compared as follows:
Object: return true only if both operands reference the same object.
String: return true only if both operands have the same characters in the same order.
Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false; so NaN is never equal to NaN.
Boolean: return true only if operands are both true or both false.
BigInt: return true only if both operands have the same value.
Symbol: return true only if both operands reference the same symbol.
If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false.
If one of the operands is an object and the other is a primitive, convert the object to a primitive.
At this step, both operands are converted to primitives (one of String, Number, Boolean, Symbol, and BigInt). The rest of the conversion is done case-by-case.
If they are of the same type, compare them using step 1.
If one of the operands is a Symbol but the other is not, return false.
If one of the operands is a Boolean but the other is not, convert the boolean to a number: true is converted to 1, and false is converted to 0. Then compare the two operands loosely again.
Number to String: convert the string to a number. Conversion failure results in NaN, which will guarantee the equality to be false.
Number to BigInt: compare by their numeric value. If the number is ±Infinity or NaN, return false.
String to BigInt: convert the string to a BigInt using the same algorithm as the BigInt() constructor. If conversion fails, return false.
Traditionally, and according to ECMAScript, all primitives and objects are loosely unequal to undefined and null. But most browsers permit a very narrow class of objects (specifically, the document.all object for any page), in some contexts, to act as if they emulate the value undefined. Loose equality is one such context: null == A and undefined == A evaluate to true if, and only if, A is an object that emulates undefined. In all other cases an object is never loosely equal to undefined or null.

In most cases, using loose equality is discouraged. The result of a comparison using strict equality is easier to predict, and may evaluate more quickly due to the lack of type coercion.

The following example demonstrates loose equality comparisons involving the number primitive 0, the bigint primitive 0n, the string primitive '0', and an object whose toString() value is '0'.

const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true


2-> = = =

Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not NaN and are the same value, or if one is +0 and one is -0.

Strict equality is almost always the correct comparison operation to use. For all values except numbers, it uses the obvious semantics: a value is only equal to itself. For numbers it uses slightly different semantics to gloss over two different edge cases. The first is that floating point zero is either positively or negatively signed. This is useful in representing certain mathematical solutions, but as most situations don't care about the difference between +0 and -0, strict equality treats them as the same value. The second is that floating point includes the concept of a not-a-number value, NaN, to represent the solution to certain ill-defined mathematical problems: negative infinity added to positive infinity, for example. Strict equality treats NaN as unequal to every other value — including itself. (The only case in which (x !== x) is true is when x is NaN.)

Besides ===, strict equality is also used by array index-finding methods including Array.prototype.indexOf(), Array.prototype.lastIndexOf(), TypedArray.prototype.indexOf(), TypedArray.prototype.lastIndexOf(), and case-matching. This means you cannot use indexOf(NaN) to find the index of a NaN value in an array, or use NaN as a case value in a switch statement and make it match anything.


const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

Link :-)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


Number coersion :-)


Numbers are returned as-is.
undefined turns into NaN.
null turns into 0.
true turns into 1; false turns into 0.
Strings are converted by parsing them as if they contain a number literal. Parsing failure results in NaN. There are some minor differences compared to an actual number literal:
Leading and trailing whitespace/line terminators are ignored.
A leading 0 digit does not cause the number to become an octal literal (or get rejected in strict mode).
+ and - are allowed at the start of the string to indicate its sign. (In actual code, they "look like" part of the literal, but are actually separate unary operators.) However, the sign can only appear once, and must not be followed by whitespace.
Infinity and -Infinity are recognized as literals. In actual code, they are global variables.
Empty or whitespace-only strings are converted to 0.
Numeric separators are not allowed.
BigInts throw a TypeError to prevent unintended implicit coercion causing loss of precision.
Symbols throw a TypeError.
Objects are first converted to a primitive by calling their [@@toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The resulting primitive is then converted to a number.
There are two ways to achieve nearly the same effect in JavaScript.

Unary plus: +x does exactly the number coercion steps explained above to convert x.
The Number() function: Number(x) uses the same algorithm to convert x, except that BigInts don't throw a TypeError, but return their number value, with possible loss of precision.

*/