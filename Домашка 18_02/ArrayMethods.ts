// реализовать push, map, join, fill, includes, indexOF

// T1 - тип массива который на входе
// T2 - тип массива который на выходе
function myMap<T1, T2>(array: T1[], fn: (item: T1, index: number) => T2): T2[] {
  const newArray: T2[] = [];

  for (let i = 0; i < array.length; i++) {
    // newArray.push(fn(array[i], i));
    myPush(newArray, fn(array[i], i));
  }

  return newArray;
}

// сделал чат гпт

// function myMapChatGpt<T, U>(
//   array: T[],
//   fn: (item: T, index: number) => U
// ): U[] {
//   const newArray: U[] = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(fn(array[i], i));
//   }
//   return newArray;
// }

const myArray: number[] = [1, 2, 3, 4, 5, 6, 7];

// map = transform
// myArray.transform((item) => item * 2)
console.log(myArray.map((item) => item * 2));

console.log(myMap(myArray, (item) => item * 2));
console.log(myMap([""], (item) => "".length));

//push

function myPush<T>(array: T[], item: T): number {
  array[array.length] = item; // не понимаю всё равно как это работает.
  return array.length;
}

myPush(myArray, 15);
console.log(myArray);
[].push;

function myJoin<T>(array: T[], glue: string): string {
  let result: string = "";

  for (let i = 0; i < array.length - 1; i++) {
    // result = result + array[i] + glue;
    result += array[i] + glue;
  }

  return result + array[array.length - 1];
}

console.log(myJoin(["hello", "privet", "okay"], ";"));

// const myArray: number[] = [1, 2, 3, 4, 5, 6, 7];

function myFill<T>(array: T[], value: T, start: number, end: number): T[] {
  for (let i = start; i <= end; i++) {
    array[i] = value;
  }
  return array;
}

console.log(myFill(myArray, 0, 2, 6));

console.log(myArray.fill(0, 2, 6));

const myArray1: number[] = [1, 2, 3, 4, 5, 6, 7];

function myIndexOf<T>(array: T[], item: T, from: number): number {
  for (let i = from; i < array.length; i++) {
    if (array[i] == item) return i;
  }
  return -1;
}

console.log(myIndexOf(myArray1, 3, 0));

function printMultiplicationTable1(): void {
  for (let i = 1; i < 10; i++) {
    const result: string[] = [];

    for (let j = 1; j < 10; j++) {
      result.push(`${j} * ${i} = ${j * i}`.padEnd(10, " "));
    }

    console.log(myJoin(result, "  "));
  }
}

printMultiplicationTable1();

function myIncludes<T>(array: T[], item: T, from: number): boolean {
  for (let i = from; i < array.length; i++) {
    console.log("🚀 ~ myIndexOf ~ array[i]:", array[i]);
    if (array[i] == item) return true;
  }
  return false;
}

console.log(myIncludes([0, 1, 2, 3, 4, 5, 6], 5, 3));
