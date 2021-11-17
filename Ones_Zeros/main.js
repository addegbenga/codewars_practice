//problem
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = (arr) => {
  let changeParams;
  changeParams = arr.join("");
  const binaryValue = parseInt(changeParams, 2);
  return binaryValue;
};

binaryArrayToNumber([0,1,1,0]);

//lesson;

//1.The parseInt() function parses a string argument and returns an integer of the specified radix i.e binary which in our case was base 2