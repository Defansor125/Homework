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

// Домашка: разобрать стрелочные функции + методы массивов

const array: number[] = [1, 7, 5, 3, 2];

// !!методы массива Push добавляет в конец массива

// array.push(5);

// !!forEach возвращает объект и его индекс, а так же применяет каллбэк функцию для каждого объекта

// array.forEach((object: number) => array.push(object * 2));

// !!join делает из массива строку разделяя его значением которое указал

// const changedArray = array.join("|");

// console.log(changedArray, typeof changedArray);

// !!split противоположность join делает из строки массив по разделителю

// const str = "Masha, Sasha, Pasha, Lesha, Gosha, Arturio";

// console.log(str.split(","));

// map совершает функцию над каждым элементом, возвращает массив с результатами функции

// const result = array.map((value) => value * 2); // можно было использовать вместо forEach и push

// console.log("🚀 ~ result:", result);

// fill используется в массиве для его заполнения array.fill(value, startindex, endindex) значение чем нужно заполнить, с какого индекса начать, на каком индексе закончить почему то начинает с индекс + 1 а заканчивает на индексе ровно,
// Где можно использовать?

// array.fill(6, 3, 4);

// indexof и includes по сути одно и тоже НО indexof ищет item и возвращает -1 если его нет, а если есть возвращает индекс, includes возвращает просто true если такой item есть
console.log(array.indexOf(1)); // 0
console.log(array.indexOf(121)); // -1
console.log(array.includes(1)); // true
console.log(array.includes(121)); // false

console.log(array);
