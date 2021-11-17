Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case;



## Tips on coverting interger to a number
Using the above steps, here is the work involved in the solution for converting 1234 to binary number:

1234 / 2 = 617 with remainder 0
617 / 2 = 308 with remainder 1
308 / 2 = 154 with remainder 0
154 / 2 = 77 with remainder 0
77 / 2 = 38 with remainder 1
38 / 2 = 19 with remainder 0
19 / 2 = 9 with remainder 1
9 / 2 = 4 with remainder 1
4 / 2 = 2 with remainder 0
2 / 2 = 1 with remainder 0
1 / 2 = 0 with remainder 1

Then just write down the remainders in the reverse order to get the answer, The decimal number 1234 converted to binary is therefore equal to :

## From the above tips gave me an idea of what to do.