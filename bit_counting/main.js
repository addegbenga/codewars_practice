//problem

//Write a function that takes an integer as input, and
// returns the number of bits that are equal to one in the
// binary representation of that number. You can guarantee
//that input is non-negative.


//my solution
var countBits = function (n) {
  // Program Me
  let base2 = n.toString(2);
  console.log(base2)
  let arr = Array.from(base2);
  count = arr.filter((x) => x == 1).length;
  return count;
};
countBits(6836137253)
//clever solution from some genius
countBit = n => console.log(n.toString(2).split('').join(''));
countBit(6836137253);


//lesson learnt
//1. how to covert an integer to binary in javascript 
//2. hwo to split a string: method splits a string into an array of substrings, and returns the array.
