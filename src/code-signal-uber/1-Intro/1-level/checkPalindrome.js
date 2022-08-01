function solution(inputString) {
  if (inputString.length === 1) return true;
  let p1 = 0;
  let p2 = inputString.length - 1;
  while (p1 < p2) {
    if (inputString[p1] !== inputString[p2]) return false;
    p1++;
    p2--;
  }
  return true;
}

solution()

/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/
