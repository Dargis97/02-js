/*
Konstantos + kintamieji = kintamieji
konstantos: const
kintamieji: let var

primityvus: number, string, boolean
kompleksiniai: object, array
*/




const a = [1, 2]
console.log('A',a)

const b = [...a]
console.log('B',b)
const c = a
b[0] = 11
console.log('B',b)

b[1] = 22
console.log('B',b)

console.log('A',a)

c[1] = 111
console.log('A', a)