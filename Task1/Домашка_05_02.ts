// 1 написать функции по вычислению площадей: Квадрат, Треугольник, ромб, круг, трапеция

const side: number = 5;
const second_side: number = 7;
const height: number = 4;

function getSquareArea(side: number): void {
  let area = side * side;
  console.log("Площадь квадрата" + area);
}

getSquareArea(side);

function getTriangleAreaBySideAndHeight(side: number, height: number): void {
  // ? Уместно ли такое длинное название функции?
  let area = side * 0.5 * height;
  console.log("Triangle area: " + area);
}

getTriangleAreaBySideAndHeight(side, height);

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

getTrapezoidAreaBy2SidesAndHeight(side, second_side, height);

//2 поменять местам
function swap2VariablesWithThird(var1: any, var2: any): void {
  let temp = var1;
  var1 = var2;
  var2 = temp;
  console.log("Var1: ", var1, "Var2", var2);
}
swap2VariablesWithThird("Privet", "Poka");

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
  for (let index: number = 0; index < 1000; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      count = index + count;
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

function getYear(year: number): void {
  if (year % 400 === 0) {
    console.log(`Високосный год: ${year} \n кратен 400`);
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`Високосный год: ${year}\n кратен 4, но не кратен 100`);
  }
  console.log(`Год: ${year} не является високосным`);
}

getYear(2021);

// 10 Случайное число
function getRandomInRange(min: number, max: number): void {
  let random_number: number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random_number);
}

getRandomInRange(1, 100);

// 11 число в строку и строки в числа

function convertToString(number: number, string: string) {
  let converted_number: any = number.toString();
  let converted_string: any = Number(string);
  console.log(+string); // другой способ
  console.log(
    `Было: number \n Стало: ${typeof converted_number} \n Было: string \n Стало: ${typeof converted_string}`
  );
  console.log(converted_number);
  console.log(converted_string);
}

convertToString(5, "10"); // если в строку положить слово, то вернётся NaN

//3) Поиск максимального элемента в массиве

function findBiggestNumberInArray(array: number[]): number {
  let biggest_value: number = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array[index] < array[index + 1]) {
      biggest_value = array[index + 1];
    }
  }
  return biggest_value;
}

findBiggestNumberInArray([1, 2, 5, 2, 3, 6, -1, 2, 121321, 121, -1212]);

function findSmallestNumberInArray(array: number[]): number {
  // очень много времени потратил
  let smallest_number: number = array[0];

  for (let index = 0; index < array.length; index++) {
    if (smallest_number > array[index]) {
      smallest_number = array[index];
    }
  }

  return smallest_number;
}

// 4) Найти разность между максимальным и минимальным элементами массива

function getDifferenceMaxAndMinArrayNumber(array: number[]): void {
  let answer =
    findBiggestNumberInArray(array) - findSmallestNumberInArray(array);

  console.log(answer);
}

// console.log(findSmallestNumberInArray([1, -2, 5, 2, 3, 6, 1, 2, 121, -12]));

getDifferenceMaxAndMinArrayNumber([1, 2, 5, 2, 3, 6, 1, 2, 121]);

// 5) Вывести элементы массива, которые больше предыдущего
