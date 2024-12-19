//REDUCE FUNCTION
let nums = [1, 2, 3, 4, 3, 7, 9, 6, 8];
let finalValue = nums.reduce((res, el) => res + el);
console.log(finalValue);

//MAXIMUM IN ARRAY
let max = nums.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);

//MINIMUM IN ARRAY
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}
console.log(min);

//DEFAULT PARAMETER
function sum(a, b = 3) {
  return a + b;
}
