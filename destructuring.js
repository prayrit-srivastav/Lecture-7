const obj = {
  a: 1,
  b: 2,
  c: [1, 2, 3, 4],
  d: {
    val() {
      console.log('value in d');
    },
    prop: 'property',
  },
};

const { a /** a:a */, b } = obj;

console.log(a);
console.log(b);
