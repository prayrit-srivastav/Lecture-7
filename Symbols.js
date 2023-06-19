const sym1 = Symbol();
console.log(sym1);
console.log(typeof sym1);

const sym3 = Symbol();
console.log(sym3);

console.log(sym1 === sym3);

const sym2 = Symbol('sym2');
console.log(sym2);

const sym22 = Symbol('sym2');
console.log(sym2 === sym22);
