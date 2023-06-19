const key1 = Symbol();
const func1 = Symbol();

const obj = {
  [key1]: 'Some Value',
  [func1]() {
    return 'some method';
  },
  type: 'object Literal',
};

console.log(obj[key1]);
console.log(obj[func1]());
