const marks = [10, 2, 3, 5, 1, 4];
const marks1 = [10, -2, 3, -5, 1, 4];
const mark3 = ['asgfsagasd', true, [], {}];
const mark4 = [];
const mark5 = [NaN];

function maxNumber(list) {
  let max = -Infinity;
  for (const mark of list) {
    if (typeof mark === 'number' && isFinite(mark) && mark > max) {
      max = mark;
    }
  }

  if (max === -Infinity) {
    return 'Error: duotame masyve nera skaiciu';
  }

  return max;
}

console.log('Max:', maxNumber(marks));
console.log('Max:', maxNumber(mark3));
console.log('Max:', maxNumber(mark4));
console.log('Max:', maxNumber(mark5));
