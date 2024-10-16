// const twoIntegerSumBF = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log(i, j);
//         return [i, j].sort((i, j) => i + j);
//       }
//     }
//   }
// };

// const resultBF = twoIntegerSumBF([3, 4, 5, 6], 7);
// console.log(resultBF);

const twoIntegerSum = (nums, target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const expectedNum = target - nums[i];

    if (expectedNum in numMap) {
      return [numMap[expectedNum], i];
    }

    numMap[nums[i]] = i;
  }
};

const result = twoIntegerSum([3, 4, 5, 6], 7);
console.log(result);

/*

first go to the element, then target - element and add that to the hashmap with correct index of that element as the key
then check the value we get for example  7 - 3  = 4

*/
