/* FUNCTIONS */

const funcA = () => {};
const funcB = () => {};
funcA === funcB;
// false

const funcC = () => {};
const funcD = funcC;
funcC === funcD;
// true

/* ARRAYS */

const arrayA = [];
const arrayB = [];
arrayA === arrayB;
// false

const arrayC = [1, 2, 3];
const arrayD = [1, 2, 3];
arrayC === arrayD;
// false

const arrayE = [1, 2, 3];
const arrayF = arrayE;
arrayE === arrayF;
// true

/* OBJECTS */ 

const objA = {};
const objB = {};
objA === objB;
// false

const objC = { prop: 1 };
const objD = { prop: 1 };
objC === objD;
// false

const objE = { prop: 1 };
const objF = objE;
objE === objF;
// true