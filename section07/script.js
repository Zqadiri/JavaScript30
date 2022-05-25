
//ES6 feature
const restaurant = {
	name: 'Classico',
	location: 'loc',
	categories: ['Italien', 'Organic'],
	starterMenu: ['Focaccia', 'Salad', 'Bruschetta', 'Bread'],
	mainMenu: ['Pizza', 'Pasta', 'Garlic bread'],
	openingHours:{
		thu:{
			open:12,
			close:22,
		},
		fri:{
			open:11,
			close:23,
		},
		sat:{
			open:0, // 24 hours
			close:24,
		},
	},
	order: function(starterIndex, mainIndex){
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	// orderDelivery: function (obj){
	// 	console.log(obj);
	// }
	orderDelivery: function ({starterIndex = 1, mainIndex = 1, time = '22:00', addresse}){ // exact names of the object
		console.log(starterIndex, mainIndex, time, addresse);
	},

	orderPasta: function (ing1, ing2, ing3){
		console.log(ing1, ing2, ing3,"PASTA!");
	}
};

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
const c = arr[2];

//! Destructuring Arrays ------------------------------------------------

const [x, y, z] = arr;
console.log(x, y, z);

// Skip element
const [first, , second] = restaurant.mainMenu;
console.log(first, second);

// Switching variables
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Order
const [starter, mainC] = restaurant.order(2, 0);
console.log(starter, mainC);

// nested arrays
const nested = [2, 3 ,[5 , 6]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

// Default values
const [p=1, q, r=1] =  [8, 9];
console.log(p, q, r);

//! Destructuring Objects ---------------------------------------------------------

const {name, openingHours, categories} = restaurant; // order does not matters
console.log(name, openingHours, categories);

// change the names
const {name:restName, openingHours:Hours, categories: cat} = restaurant;
console.log(restName, Hours, cat);

// default values
const {menu = [], starterMenu:start = []} = restaurant;
console.log(menu, start);

// Switching variables
let a = 22;
let b = 11;
const obj  = {a: 23, b:55, c:2};

// {a, b} = obj;
({a, b} = obj);
console.log(a, b);

// nested objects
const {
	fri: {
		open: o, close: h},
} = openingHours;
console.log(o, h);

// pass an object of options
restaurant.orderDelivery({
	time: '22:30',
	addresse: 'address',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	addresse: 'address',
	mainIndex: 2,
});

//! The spread Operator -----------------------------------------------------------

// Add new elements to an array
const arrr = [7 ,8, 9];
const newArr = [1, 2, ...arrr];
console.log(newArr);

console.log(...newArr);
// *equal to 
// *console.log(1, 2, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array 
const menuCopy = [...restaurant.mainMenu]; // Shallow Copy

// join two arrays or more
const menus = [...restaurant.mainMenu, ...newMenu];
console.log(menus);

// Iterables : arr, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, , 'S.'];
console.log(letters);
console.log(...str);

// const ings = [prompt('let\'s start:'), prompt('next'), prompt('last')];
// restaurant.orderPasta(...ings);

// Objects
const newRest = {year: '1996', ...restaurant, founder: 'guiseppe'};
console.log(newRest);

//! Rest Pattern ---------------------------------------------------------------

 

