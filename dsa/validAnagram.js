// const isAnagramArray = (s, t) => {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sArr = [...s];
//   const tArr = [...t];

//   for (const char of sArr) {
//     const index = tArr.indexOf(char);
//     if (index === -1) {
//       return false;
//     } else {
//       tArr.splice(index, index + 1);
//     }
//   }
// };

// const resultArray = isAnagramArray('racecar', 'carrace');
// console.log(resultArray);

const isAnagramMap = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};
