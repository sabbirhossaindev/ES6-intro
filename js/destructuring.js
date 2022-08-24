// // object destructuring=> propety na same name dita hoy..
// const fish = {
//     name: 'King Hilsa',
//     address: 'Chandpur',
//     color: 'silver',
//     phone : '017176588899',
//     price: 4000
// }

// // const phone = fish.phone;
// // const color = fish.color;
// // const price = fish.price;

// const {phone} = fish;

// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);

// const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
// console.log(age);

// const {address} = fish;
// console.log(address);

// // array destructuring
// const [first, another] = [44, 99, 88, 456];
// console.log(first, another);

// const nayoks = ['sakib', 'bappi', 'raj'];
// const [king, lost, notun] = nayoks;
// console.log(notun);

// function getNames(){
//     return ['Alim', 'Halm'];
// }

// const [baba, chacha] = getNames();
// console.log(chacha, baba);


// quiz............
// function getSum(a, b = 9) {
//     return a + b;
// }
// console.log(getSum(2, 7)); // 9

const y = x => x * x;
const z = y(5); 
console.log(z); // 25


// const name = "hero";
// const a = `Welcome Home! ${name}`;
// console.log(a); //Welcome Home! hero

// const sabbir = nam1, num2 => console.log(nam1 / num2); // SyntaxError: Missing initializer in const declaration

const max = Math.max(12, 85, 999, 78);
console.log(max); // 999

const cars = ['toyota', 'honda', 'mercedes'];
const newCar = [...cars, 'ferrari'];
console.log(newCar); //[ 'toyota', 'honda', 'mercedes', 'ferrari' ]
