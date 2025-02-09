// 1 написать функции по вычислению площадей: Квадрат, Треугольник, ромб, круг, трапеция

const side: number = 5;
const secondSide: number = 7;
const height: number = 4;

function getSquareArea(side: number): number {
  return side * side;
}

const area1 = getSquareArea(side);

function getTriangleArea(side: number, height: number): void {
  // ? Уместно ли такое длинное название функции?
  let area = side * 0.5 * height;
  console.log("Triangle area: " + area);
}

getTriangleArea(side, height);

function getRhombusAreaBySideLengthAndHeight(
  side: number,
  height: number
): void {
  let area: number = side * height;
  console.log("Rhombus area: ", area);
}

getRhombusAreaBySideLengthAndHeight(side, height);

function getCircleAreaByPIAndRadius(radius: number): void {
  let area: number = radius * radius * Math.PI;
  console.log("Circle area: ", area);
}

getCircleAreaByPIAndRadius(side);

function getTrapezoidAreaBy2SidesAndHeight(
  side1: number,
  side2: number,
  height: number
) {
  let area: number = ((side1 + side2) / 2) * height;
  console.log("Trapezoid area: ", area);
}

getTrapezoidAreaBy2SidesAndHeight(side, secondSide, height);

//2 поменять местам
function swap2VariablesWithThird(var1: any, var2: any): void {
  let temp = var1;
  var1 = var2;
  var2 = temp;
  console.log("Var1: ", var1, "Var2", var2);
}
swap2VariablesWithThird("Privet", "Poka");

//
// let x = 10 = 10 - 2 = 8 =       = 8  = 10 - 8 = 2
// let y = 2  =        = 2 = 2 + 8 = 10 =        = 10

// 3 поменять без третий, есть вариант через XOR подходит для целых чисел
function swap2Variables(var1: any, var2: any): void {
  console.log("Before change [var1 var2]", var1, var2);
  [var1, var2] = [var2, var1];
  console.log("after change [var1, var2]: ", var1, var2);
}

swap2Variables("spasibo", "pojaluysta");

// 4 найти сумму

function getSumInRangeLessThanThousand(): void {
  let count: number = 0;
  for (let i: number = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count = i + count;
    }
  }
  console.log(count);
}

getSumInRangeLessThanThousand();

// 8 Факториал

function getFactorial(number: number) {
  let sum: number = 1;
  for (let i: number = 1; i <= number; i++) {
    sum = sum * i;
  }
  console.log(`Факториал числа: ${number} = ${sum}`);
}

getFactorial(51);

//9 Year

function isLeapYear(year: number): boolean {
  if (year % 400 === 0) {
    console.log(`Високосный год: ${year} \n кратен 400`);
    return true;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`Високосный год: ${year}\n кратен 4, но не кратен 100`);
    return true;
  }
  console.log(`Год: ${year} не является високосным`);
  return false;
}

isLeapYear(2021);

// 10 Случайное число
function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(1, 100);

// 11 число в строку и строки в числа

function convertToString(number: number, string: string) {
  const converted_number: string = number.toString();
  // let converted_number: string = String(number);
  const converted_string: number = Number(string);
  console.log(+string); // другой способ

  console.log(
    `Было: number \n Стало: ${typeof converted_number} \n Было: string \n Стало: ${typeof converted_string}`
  );
  console.log(converted_number);
  console.log(converted_string);
}

convertToString(5, "c0"); // если в строку положить слово, то вернётся NaN

//3) Поиск максимального элемента в массиве
// max = 8
// [1, 4, 2, 6, 2, 5, 8, 2]
function findMax(array: number[]): number {
  let max: number = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

findMax([1, 2, 5, 2, 3, 6, -1, 2, 121321, 121, -1212]);

function findMin(array: number[]): number {
  let min: number = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

// 4) Найти разность между максимальным и минимальным элементами массива

function getDifferenceMaxAndMinArrayNumber(array: number[]): void {
  const answer = findMax(array) - findMin(array);

  console.log(answer);
}

// console.log(findSmallestNumberInArray([1, -2, 5, 2, 3, 6, 1, 2, 121, -12]));

getDifferenceMaxAndMinArrayNumber([1, 2, 5, 2, 3, 6, 1, 2, 121]);

// 5) Вывести элементы массива, которые больше предыдущего
// [1, 4, 2, 6, 2, 5, 8, 2]

function getElementBiggerThanPrevious(array: number[]): number[] {
  let result: number[] = [];

  for (let i: number = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      result.push(array[i + 1]);
    }
  }
  return result;

  // const name: "A" | "B" = "A";

  // if (name === "A") {
  // } else if (name === "B") {
  // } else {
  //   console.log(name.replace());
  // }
}

const s: number[] = [1, 2, 1, 0, 5, 3, 8];

console.log(getElementBiggerThanPrevious(s));
