import { log } from "console";

const a: number[] = [6, 4, 20, 9];

function f1(num: number, index: number): void {
  console.log(`num = ${num}; index = ${index}`);
}

const f2 = (num: number, index: number): void => {
  console.log(`num = ${num}; index = ${index}`);
};

// a.forEach(f2);

a.forEach((x, index) => {
  console.log(`num = ${x}; index = ${index}`);
});

// myForeach(a, (x, index) => {
//   console.log(`num = ${x}; index = ${index}`);
// });

// f1(6, 0)
// f1(4, 1)
// f1(20, 2)
// f1(9, 3)

// type Fn = (value: number, index: number) => void;
// type Color = "red" | "green";
// type n = number;

// const color: Color = "red";

// function myForeach(array: n[], fn: Fn): void {
//   for (let i = 0; i < array.length; i++) {
//     fn(array[i], i);
//   }
// }
