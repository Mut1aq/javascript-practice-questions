/** 
// ! Task-002 (1)
 
Question:- 

// * Create a password validator function.
// * You will receive a parameter called "password"
// * Password must be of type string
// * Password must be more than 8 characters
// * Password must be less than 30 characters
// * Password must include one uppercase letter
// * Password must include one lowercase letter
// * Password must include one special letter
// * Password must include one number
// * Function must return the missing validation point for example the password "mutlaq12345" does not have an uppercase letter or a special character as a string.
// * Use the following arrays
 


  const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specialCharacters = [
  '.',
  '*',
  '/',
  '-',
  ';',
  '{',
  '}',
  '[',
  ']',
  '?',
  '\\',
  '+',
  ':',
  '`',
  '~',
  '_',
  '=',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '',
  '|',
  ',',
  ' ',
];
 const lowercaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
 const uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

Solution: -
 
const passwordErrors = {
	required: 'Password Must be Provided',
	type: 'Password must be of type string',
	min: 'Password must be more than 8 characters',
	max: 'Password must be less than 30 characters',
	includeUpperCaseChar: 'Password must include at least one uppercase letter',
	includeLowerCaseChar: 'Password must include at least one lowercase letter',
	includeSpecialChar: 'Password must include at least one special letter',
	includeNumbers: 'Password must include at least one number',
};
 function passwordValidator(password) {
		const validationErrors = [];
		if (!password) validationErrors.push(passwordErrors.required);

		const passwordLength = password.length;

		if (!(typeof password == 'string')) validationErrors.push(passwordErrors.type);

		if (passwordLength <= 8) validationErrors.push(passwordErrors.min);

		if (passwordLength >= 30) validationErrors.push(passwordErrors.max);

		if (!hasCharacterFromSet(password, uppercaseLetters))
			validationErrors.push(passwordErrors.includeUpperCaseChar);

		if (!hasCharacterFromSet(password, lowercaseLetters))
			validationErrors.push(passwordErrors.includeLowerCaseChar);

		if (!hasCharacterFromSet(password, stringNumbers))
			validationErrors.push(passwordErrors.includeNumbers);

		if (!hasCharacterFromSet(password, specialCharacters))
			validationErrors.push(passwordErrors.includeSpecialChar);

		if (validationErrors.length > 0)
			return validationErrors.map((error) => error + '\n').join('');

		return 'Password is Valid';
 }

 function hasCharacterFromSet(password = '', characterSet) {
		return characterSet.some((char) => password.includes(char) && !!char);
 }

 console.log(passwordValidator('m'));
 console.log(passwordValidator('mU'));
 console.log(passwordValidator('mU1'));
 console.log(passwordValidator('mU1@ssssss'));

Question: -
// * Turn the previous function into a "function expression" and turn it to an arrow function
*/

/**
 ### Create a function that takes a number as an argument.
 ### Add up all the numbers from 1 to the number you passed to the function.
 ### For example, if the input is 4 then your function should return 10
 ### because 1 + 2 + 3 + 4 = 10.
 */
function addUp(number) {
	let sum = 0;
	for (let i = 0; i <= number; i++) {
		sum += i;
	}
	return sum;
}
function addUp(number) {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += i;
	}
	return sum;
}

/**
 # Create a function that takes an array containing only numbers and return the first element.
 # Check if all elements are numbers using [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
 */
function getFirstValue(arr) {
	const isArrayFalsy = !arr; // null or undefined
	if (isArrayFalsy) throw new Error('An Array must be provided');

	const isParamOfTypeArray = Array.isArray(arr);
	if (!isParamOfTypeArray) throw new Error('Provided parameter was not an array');

	const isEveryValueANumber = arr.every((element) => typeof element === 'number');
	if (isEveryValueANumber) return arr[0];
}

/**
 ### Create a function that takes an array of numbers
 ### and return both the minimum and maximum numbers, in that order.
 ### using [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
 ### minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 ### minMax([2334454, 5]) ➞ [5, 2334454]
 ### minMax([1]) ➞ [1, 1]
 */

function minMax(arr) {
	const isArrayFalsy = !arr; // null or undefined
	if (isArrayFalsy) throw new Error('An Array must be provided');

	const isParamOfTypeArray = Array.isArray(arr);
	if (!isParamOfTypeArray) throw new Error('Provided parameter was not an array');

	const isEveryValueANumber = arr.every((element) => typeof element === 'number');
	if (!isEveryValueANumber) throw new Error('You must provide an array of numbers');

	const result = [];
	const min = arr.reduce((previousValue, current) =>
		previousValue < current ? previousValue : current
	);
	result.push(min);
	const max = arr.reduce((previousValue, current) =>
		previousValue > current ? previousValue : current
	);
	result.push(max);

	return result;
}

/**
 ### Create a function which returns the number of true values there are in an array.
 ### using [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 */

function countTrue(arr) {
	return arr.filter((val) => typeof val === 'boolean' && val).length;
}

/**
 ### Write a function redundant that takes in a string str and returns a function that returns str.
 ### Your function should return a function, not a string
 */

function redundant(str) {
	return () => str;
}

/**
 ### Create a function that takes an array of numbers and return "Boom!"
 ### if the digit 7 appears in the array.
 ### Otherwise, return "there is no 7 in the array".
 ### using [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
 ###
 ### sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
 ### sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
 ### sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
 ### 						7 is in 97
 */

function sevenBoom(arr) {
	return !!arr.find((ele) => (ele + '').includes(7))
		? 'Boom!'
		: 'there is no 7 in the array';
}

/**
 ###  Create a function that takes in an array of integers returns the number of even or odd digits for each number, 
 ###  depending on the parameter.
 ###  
 ###  countDigits([22, 53, 99, 61, 777, 8], "odd") ➞ [0, 2, 2, 1, 3, 0]
 ###  countDigits([22, 53, 99, 61, 777, 8], "even") ➞ [2, 0, 0, 1, 0, 1]
 ###  countDigits([54, 113, 89, 10], "odd") ➞ [1, 3, 1, 1]
 ###  countDigits([54, 113, 89, 10], "even") ➞ [1, 0, 1, 1]
 
 */

function countDigits(arr, type) {
	let result = arr.map((ele) => 0);
	arr.forEach(
		(val, index) =>
			(result[index] = (val + '')
				.split('')
				.filter((ele) => +ele % 2 === (type === 'odd' ? 1 : 0)).length)
	);

	return result;
}

/**
 ###  Create a function that takes an array of objects (groceries) 
 ###  which calculates the total price and returns it as a number. 
 ###  A grocery object has a product, a quantity and a price, for example:
 
 ```js
 {
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
```

```js
const groceries = [
	{product: 'Milk', quantity: 1, price: 1.5},
	{product: 'Milk', quantity: 1, price: 1.5},
	{product: 'Cereals', quantity: 1, price: 2.5},
	{product: 'Milk', quantity: 3, price: 1.5},
	{product: 'Milk', quantity: 1, price: 1.5},
	{product: 'Eggs', quantity: 12, price: 0.1},
	{product: 'Bread', quantity: 2, price: 1.6},
	{product: 'Cheese', quantity: 1, price: 4.5},
	{product: 'Chocolate', quantity: 1, price: 0.1},
	{product: 'Lollipop', quantity: 1, price: 0.2},
];
```
 
 */

function getTotalPrice(groceries) {
	return groceries.reduce(
		(total, obj) => +(total + obj.quantity * obj.price).toFixed(1),
		0
	);
}

/**
### Create a function that takes a string as a parameter, this function should return the first reappearance of a 
char that appeared at least twice in an object that looks like this
```js
let str = "ABCATRRF"
{
  'A': [0, 3]
  // 0 is the index the first time A appeared, 3 is the second time 
}
``` 
### The function should return the char that completes a cycle first meaning in this string **YXZXYTUVXWV**
### Y appeared in index 0 and index 4, but the function should return
```js
let str = "YXZXYTUVXWV"
{
  'X': [1, 3]
  // beacause the letter X finished faster than Y even though Y appeared first
}
```
### The function should return an **__empty object**__ if the passed argument is either null, undefined, empty string, or no recurring item exists.
```js
function recurIndex(str) {
    
}
// TEST CASES
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("KDXTDATTDDX") ➞ {"D":[1,4]}

recurIndex("AKEDCBERSDA") ➞ {"E":[2,6]}

recurIndex("DXKETRETXDK") ➞ {"E":[3,6]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}
```
 */

function recurIndex(str) {
	const object = {};
	let firstOccurrenceIndex;
	let secondOccurrenceIndex;
	let key;
	if (!str) return {};
	str.split('').find((firstChar, firstIndex, strArr) =>
		strArr.find((secondChar, secondIndex) => {
			if (firstChar === secondChar && firstIndex !== secondIndex && !object[firstChar]) {
				firstOccurrenceIndex = firstIndex;
				secondOccurrenceIndex = secondIndex;
				key = firstChar;
				object[key] = [firstOccurrenceIndex, secondOccurrenceIndex];
			}
		})
	);
	if (!key) return {};
	let min = Number.MAX_SAFE_INTEGER;
	let minKey;
	for (const property in object) {
		if (object[property][1] - object[property][0] < min) {
			min = object[property][1] - object[property][0];
			minKey = property;
		}
	}
	return {[minKey]: object[minKey]};
}
const recurIndex = (str) => {
	for (const [i, char] of [...(str || '')].entries()) {
		const j = str.indexOf(char);
		if (j < i) return {[char]: [j, i]};
	}
	return {};
};

function recurIndex(str) {
	if (!str) {
		return {};
	}
	let characters = {},
		indices = [],
		character = '';
	for (i = 0; i < str.length; i++) {
		if (Object.keys(characters).includes(str[i])) {
			character = str[i];
			indices.push(characters[str[i]], i);
			break;
		} else {
			characters[str[i]] = i;
		}
	}
	return indices.length ? {[character]: indices} : {};
}
