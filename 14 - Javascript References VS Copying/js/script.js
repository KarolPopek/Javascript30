
// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
	
let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'Wesley';
console.log(name, name2);

// Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

//const team = players;
//console.log(players, team);

// You might think we can just do something like this:

//team[3] = 'Lux';
//console.log(players, team);

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
team2[3] = 'Lux';
console.log(players, team2);

const team3 = [].concat(players);
team3[3] = 'Lux';
console.log(players, team3);

const team4 = [...players];
team4[3] = 'Lux';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'Lux';
console.log(players, team5);

// The same thing goes for objects, let's say we have a person object
 
const person = 
{
    name: 'Wes Bos',
    age: 80
};


// and think we make a copy:

//const captain = person;
//captain.number = 99;

// how do we take a copy instead?

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, cap2);

const wes = 
{
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
};

console.clear();
console.log(wes);
const dev = Object.assign({}, wes);
console.log(dev);
const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);


