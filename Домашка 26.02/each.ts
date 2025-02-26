const fn1 = (value: string): void => console.log("fn1", value);
const fn2 = (value: string): void => console.log("fn2", value);
const fn3 = (value: string): void => console.log("fn3", value);

const functions = [fn1, fn2, fn3];

const fruits: string[] = ["apple", "potato", "orange", "melon", "tomato"];

function each<T>(array: T[], fnArray) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (count === 3) {
      count = 0;
    }
    let fn = fnArray[count];
    count += 1;
    fn(array[i]);
  }
}

each<string>(fruits, functions);
