const fruits = [
  'Apple',
  'Mango',
  'Kiwi',
  'Berry',
];

const [x, y, ...z] = fruits;

console.log(x, y);
console.log(z);
