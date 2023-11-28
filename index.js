/**
 ### Create a function that takes a number as an argument.
 ### Add up all the numbers from 1 to the number you passed to the function.
 ### For example, if the input is 4 then your function should return 10
 ### because 1 + 2 + 3 + 4 = 10.
 */
function addUp(num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
}

/**
 # Create a function that takes an array containing only numbers and return the first element.
 # Check if all elements are numbers using [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
 */
function getFirstValue(arr) {
	if (arr.every((element) => typeof element === 'number')) {
		return arr[0];
	}
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
	const result = [];
	result.push(
		arr.reduce((previousValue, current) =>
			previousValue < current ? previousValue : current
		)
	);

	result.push(
		arr.reduce((previousValue, current) =>
			previousValue > current ? previousValue : current
		)
	);

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
