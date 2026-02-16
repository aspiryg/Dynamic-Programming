let nums = [1, 1, 4, -6, 8, 5, 9, 1, 2, 9, -1];

// for (let i = 0; i < nums.length; ++i) {
//   let newList = [];
//   for (let j = i; j < nums.length; ++j) {
//     newList.push(nums[j]);
//   }
//   console.log(newList);
// }

// const suffixes = nums.map((_, i) => nums.slice(i));

// console.log(suffixes);

const highestCombinationOfTwo = (list) => {
  let highest = 0;
  for (let i = 0; i < list.length; ++i) {
    if (i < list.length - 1) {
      let local =
        list[i] > list[i] + list[i + 1] ? list[i] : list[i] + list[i + 1];
      highest = local > highest ? local : highest;
    } else {
      highest = list[i] > highest ? list[i] : highest;
    }
  }
  return highest;
};

console.log(highestCombinationOfTwo(nums));




