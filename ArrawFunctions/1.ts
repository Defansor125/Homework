const sum = (a: number, b: number): number => {
  return a + b;
};

// console.log(sum(1, 2));

f(1, 2, sum);

function f(a: number, b: number, fn: any) {
  console.log(typeof a, typeof b, typeof "hello world", typeof fn);

  const result = fn(a, b);
  console.log("result :>> ", result);
}
