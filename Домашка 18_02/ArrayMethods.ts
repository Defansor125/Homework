// реализовать push, map, join, fill, includes, indexOF

function myMap(
  array: number[],
  fn: (item: number, index: number) => number
): number[] {
  const newArray: number[] = [];
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

console.log(
  myArray.map((item) => {
    return item * 2;
  })
);

console.log(
  myMap(myArray, (item) => {
    return item * 2;
  })
);

//push

function myPush(array: number[], item: number): number[] {
  array[array.length] = item; // не понимаю всё равно как это работает.
  return array;
}

console.log(myPush(myArray, 15));

function myJoin(array: string[], glue: string): void {
  let result: string = "";
  for (let i = 0; i < array.length; i++) {
    const str = array[i];
    if (i != array.length - 1) {
      result = result + str + glue;
    } else {
      result = result + str;
    }
  }
  console.log(result);
}

myJoin(["hello", "privet", "okay"], ";");

// const myArray: number[] = [1, 2, 3, 4, 5, 6, 7];

function myFill(array: any[], value: any, start: number, end: number): any[] {
  for (let i = start; i <= end; i++) {
    array[i] = value;
  }
  return array;
}

console.log(myFill(myArray, 0, 2, 6));

console.log(myArray.fill(0, 2, 6));

const myArray1: number[] = [1, 2, 3, 4, 5, 6, 7];
function myIndexOf(array: any[], item: any, from: number) {
  for (let i = from; i < array.length; i++) {
    console.log("🚀 ~ myIndexOf ~ array[i]:", array[i]);
    if (array[i] == item) return i;
  }
  return -1;
}

console.log(myIndexOf(myArray1, 3, 0));

function myIncludes(array: any[], item: any, from: number) {
  for (let i = from; i < array.length; i++) {
    console.log("🚀 ~ myIndexOf ~ array[i]:", array[i]);
    if (array[i] == item) return true;
  }
  return false;
}
