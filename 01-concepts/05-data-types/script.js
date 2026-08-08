// alert( 1 / 0 );

// alert("not a num"/10); //NaN

// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN





// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

// To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

// For example, these two numbers (right above the safe range) are the same:


// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992





// // So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

// // For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

// // BigInt type was recently added to the language to represent integers of arbitrary length.

// // A BigInt value is created by appending n to the end of an integer:

// // the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;





// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;


// let name="limon"

// alert(`Hello , ${name}`);
// alert(`the result is ${1+3}`);



// // boolean
// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked


// let greater= 4<1;
// alert(greater)//false


// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)





// task 01
// What is the output of the script?

// let name = "Ilya"; //Ilya

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // "hello Ilya"



// let age = prompt('How old are you?', );

// alert(`You are ${age} years old!`); // You are 100 years old!


// let test = prompt("Test","jdksjd");

// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed






