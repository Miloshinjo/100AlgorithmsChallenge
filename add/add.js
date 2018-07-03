const add = (param1, param2) => param1 + param2

const add2 = (...params) => params.reduce((a, b) => a + b)

console.log(add(1, 2))
console.log(add(3, 2))

console.log(add2(1,2,3,4,5))
console.log(add2(2,3))

