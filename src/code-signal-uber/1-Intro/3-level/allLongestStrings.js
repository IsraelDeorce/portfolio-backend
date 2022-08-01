function solution(inputArray) {
  let answer = [];
  let longestLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const input = inputArray[i];
    if (input.length > longestLength) {
      answer = [input];
      longestLength = input.length
    } else if (input.length === longestLength) {
      answer.push(input);
    }
  }
  return answer;
}


/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/