//problem
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  function compareNumbers(a, b) {
    return a - b;
  }
  const sortArr = numbers.sort(compareNumbers);

  return console.log(sortArr[1] + sortArr[0]);
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

//Lesson
//1.Learnt how to use sort
