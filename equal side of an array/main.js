//problem

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

//solution:

// function findEvenIndex(arr) {
//   //  const arrLength = arr.length;

//   // const result = arr.reduce((prev, curr, ind, arr) => {
//   //   // if(ind + 1)
//   //   // const leftIndSum;

//   //   return ind;
//   // });
//   // console.log(result);

//   let m = 0;

//   arr.map((item, ind) => {
//     let n = 0;
//     let leftLoop = ind;
//     let rightLoop = ind + 1;
//     let newLeftArr = arr[leftLoop] += n;
//   return  console.log(n);
//     // console.log((arr.reduce((prev, curr)=> curr + arr[leftLoop])));
//   });
// }

// findEvenIndex([1, 2, 4, 5]);

function findN(array) {
  reducer = (s, o) => s + o;
  return array.findIndex((a, i, arr) =>
    console.log(
      arr.slice(0, i).reduce(reducer, 0) === arr.slice(i + 1).reduce(reducer, 0)
    )
  );
}

findN([20, 10, -80, 10, 10, 15, 35]); // 10

//Lessons
//This one was a hard one for me
//i Learnt how slice works so basically i new array is been created on every loop...
//to get the left side value we sliced the initial arr from the zero on every loop
//to get the valie of the right side we sliced the arr by the current index + 1 for every loop
