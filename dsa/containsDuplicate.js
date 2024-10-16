const containsDuplicateSet = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }

  return false;
};

const resultSet = containsDuplicateSet([1, 2, 3, 4, 5, 2, 2]);
console.log(resultSet);

const containsDuplicateMap = (nums) => {
  const count = {};

  for (num of nums) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] === 2) {
      return true;
    }
  }

  return false;
};

const resultMap = containsDuplicateMap([1, 2, 3, 4, 5]);
console.log(resultMap);
