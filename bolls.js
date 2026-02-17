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

// const highestCombinationOfTwo = (list) => {
//   let highest = 0;
//   for (let i = 0; i < list.length; ++i) {
//     if (i < list.length - 1) {
//       let local =
//         list[i] > list[i] + list[i + 1] ? list[i] : list[i] + list[i + 1];
//       highest = local > highest ? local : highest;
//     } else {
//       highest = list[i] > highest ? list[i] : highest;
//     }
//   }
//   return highest;
// };
const highestCombinationOfTwo = (list, highest = []) => {
  // console.log(list.length);
  if (list.length === 0) {
    return;
  }
  if (list.length === 1) {
    highest.push(list[0]);
    // console.log("I'am here 1");
    return;
  }
  if (list.length === 2) {
    // console.log("I'am here 2");
    let local = list[0] > list[0] + list[1] ? list[0] : list[0] + list[1];
    highest.push(local);
    return highest;
  }
  for (let i = list.length; i > 2; --i) {
    highestCombinationOfTwo(list.slice(i), highest);
  }
  // highestCombinationOfTwo(list.slice(1), highest);
  // console.log(highest);
  return highest;
};

// highestCombinationOfTwo(nums);
// console.log(highestCombinationOfTwo(nums));

/*
Python implemention
# From codereview.stackexchange.com
def partitions(set_):
    if not set_:
        yield []
        return
    for i in range(2**len(set_)//2):  # skip duplicates How?
        parts = [set(), set()]
        for item in set_:
            parts[i & 1].add(item)
            i >>= 1
        for b in partitions(parts[1]):
            yield [parts[0]]+b


def get_partitions(set_):
    for partition in partitions(set_):
        yield [list(elt) for elt in partition]

*/

function* partitions(inputSet) {
  const elements = Array.from(inputSet);
  const n = elements.length;

  if (n === 0) {
    yield [];
    return;
  }

  const limit = Math.floor(2 ** n / 2);

  for (let i = 0; i < limit; ++i) {
    let itemI = i;
    let parts = [new Set(), new Set()];

    for (const item of elements) {
      parts[itemI & 1].add(item);
      itemI >>= 1; // ✅ FIX
    }

    for (const b of partitions(parts[1])) {
      yield [parts[0], ...b];
    }
  }
}

function* getPartitions(inputSet) {
  for (const partition of partitions(inputSet)) {
    yield partition.map((s) => Array.from(s));
  }
}

//
const mySet = [1, 2, 3, 4, 5];
console.log(`Partitions for [${mySet}]:`);
for (const p of getPartitions(mySet)) {
  console.log(JSON.stringify(p));
}

// const list = [
//   [[A, B, C, D]],
//   [[B, C, D], [A]],
//   [[A, C, D], [B]],
//   [
//     [C, D],
//     [A, B],
//   ],
//   [[C, D], [B], [A]],
//   [[A, B, D], [C]],
//   [
//     [B, D],
//     [A, C],
//   ],
//   [[B, D], [C], [A]],
//   [
//     [A, D],
//     [B, C],
//   ],
//   [[A, D], [C], [B]],
//   [[D], [A, B, C]],
//   [[D], [B, C], [A]],
//   [[D], [A, C], [B]],
//   [[D], [C], [A, B]],
//   [[D], [C], [B], [A]],
// ];
