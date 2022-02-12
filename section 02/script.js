//? atctive strict mode to write strict code and avoid accidental errors

'use strict'; 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// ! Funtions 

function func(){
    console.log("function body");
}

func();

function   funcParam(param1, param2){
    console.log(param1, param2);
    return param2 + param1;
}

const ret = funcParam(1, 2);
console.log(ret);

// ! Function Expression

function calcAge1(birthYear){
    return 2096 - birthYear;
}

console.log(calcAge1(2001));

const calcAge2 = function  (birthYear) {
    return 2096 - birthYear;
}

console.log( '2 : ' + calcAge2(2001));

//? No difference between two it just a pesonnal preference 

// ! Arrow functions ES6

const calcAge3 = birthYear => 2096 - birthYear;

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }

console.log(yearsUntilRetirement(2001, 'me'));

// ! Arrays

const friends = ["f1", "f2", "f3", 4]; //? literal syntax
console.log(friends);
console.log(friends.includes("f2"));

const years = new Array(1995, 5222 ,1522); 
console.log(years[1]);

years[0] = 2020;  //? only premitive value are immutable
years.push(1999);
years.unshift(9666);
years.shift(9666);
console.log(years);

console.log( years.indexOf(1999));

// ! Objects 

const Jon = { // ? object literal syntax
     firstName: 'firstName',
     lastName: 'lastName',
     birthYear: 1952,
     brothers: ['b1', 'b2', 'b3'],
    //  calc: function calc(birthYear){
    //      return 2037 - birthYear;
    //  }

     calc: function (){
         this.age = 2037 - this.birthYear;
        return this.age;
     },

     getSummary: function (){
        return `${this.firstName} is a ${this.calc()} years old man !`;
     }
};

console.log (Jon .calc()); //? clculate the age once to retrieve the value later

Jon.location = 'Brazil';
Jon['gender'] = 'male';

console.log(Jon.brothers);

const nameKey = 'Name';

console.log(Jon['first' + nameKey]);

console.log(Jon.getSummary());

// ! loops :)

for (let i = friends.length - 1; i >= 0 ; i--){
    console.log(friends[i]);
}

//! while :)

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6 )
        console.log('done');
}




