const array = [1, 3, -1, -5, 12, -100];

function isSameElement(array: any): boolean {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return true;
    }
  }
  return false;
}

console.log(isSameElement([1, 2, 3, 3]));

function getMaxElement(array: number[]): number {
  let maxNumber: number = array[0];

  for (let i = 1; i < array.length; i++) {
    // if (Math.abs(maxNumber) < Math.abs(array[i])) {
    if (Math.abs(array[i]) > Math.abs(maxNumber)) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
}

console.log(getMaxElement(array)); // возвращает макс номер, не конвертируя его в положительный

function get2BiggestElements(array: number[]): number[] {
  let max1: number = array[0];
  let max2: number = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }
  return [max1, max2];
}

console.log(get2BiggestElements([7, 12, 4, -1, 3, 12, 8, 7, 5, 9, 2]));

// Вывести в 9 колонок
// 1 * 1 = 1       2 * 1 = 2       3 * 1 = 3
function printMultiplicationTable(): void {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}
// printMultiplicationTable();

// Найти количество перестановок для массива чисел. Пример: [20, 93, 11] -> 6
// [20, 93, 11]
// [20, 11, 93]
// [11, 20, 93]
// [11, 93, 20]
// [11, 93, 20]
// 3 * 2 * 1

console.log(getNumberCombination(3));
console.log(getNumberCombination(4));
console.log(getNumberCombination(5));
console.log(getNumberCombination(6));

function getNumberCombination(number: number): number {
  let result = 1;

  for (let i = 1; i < number; i++) {
    result = result * (i + 1);
  }

  return result;
}
