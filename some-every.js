function hasOddNumber(arr) {
  return arr.some((num) => num % 2 !== 0);
}

function hasAZero(num) {
  const arr = Array.from(num.toString()).map(Number);
  return arr.some((val) => val === 0);
}

function hasOnlyOddNumbers(arr) {
  return arr.every((num) => num % 2 !== 0);
}

function hasNoDuplicates(arr) {
  return arr.every((num) => {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  });
}

function hasCertainKey(arr, key) {
  return arr.every((obj) => obj[key]);
}

function hasCertainValue(arr, key, val) {
  return arr.every((obj) => obj[key] === val);
}
