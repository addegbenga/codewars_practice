//problem
//You are given an array (which will have a length of at least 3,
//but could be very large) containing integers. The array is either entirely comprised
//of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.

//exp:
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.map((item, ind) => {
    if (item & 1) {
      return (odd += integers[ind]);
    } else {
      return (even += integers[ind]);
    }
  });
  return odd.length < even.length ? Number(odd) : Number(even);
}

findOutlier([2, 3, 7, 9, 8]);

//Learnt how to use the bitwise operator & to check for a even or odd number
