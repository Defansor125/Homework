// Значимые stack копируются по значению, сравниваются по значению
// boolean, number, string

// Ссылочные heap копируются по ссылке, сравниваются по ссылке
// array, function, objects

let x = 6;
let y = x;

y /= 2;

console.log(x, y); // 6 3

const a1 = [1, 2];
const a2 = copyArray(a1);

a2.push(3);

// a2 = [1, 2, 3]

console.log(a1, a2);

console.log(1 === 2 - 1); // true
// @ts-expect-error
console.log([1, 2, 3] === [1, 2, 3]); // false
console.log(a2 === a1); // true

function copyArray(array: number[]): number[] {
  let result: number[] = [];

  for (const element of array) {
    result.push(element);
  }

  return result;
}

// Домашка: разобрать ссылочные функции
