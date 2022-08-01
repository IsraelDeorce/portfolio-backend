function solution(n) {
  const arrayOfDigits = `${n}`.split('');
  const halfPointer = arrayOfDigits.length / 2;
  return sumFirstHalf(arrayOfDigits, halfPointer) === sumSecondHalf(arrayOfDigits, halfPointer);
}

function sumFirstHalf(arr, halfPointer) {
  let sum = 0;
  for (let i = 0; i < halfPointer; i++) {
    sum += parseInt(arr[i]);
  }
  console.log(sum);
  return sum;
}

function sumSecondHalf(arr, halfPointer) {
  let sum = 0;
  for (let i = halfPointer; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  console.log(sum);
  return sum;
}


/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/