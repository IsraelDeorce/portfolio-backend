function solution(s1, s2) {
  let result = 0;
  const countCharsS1 = countChars(s1);
  const countCharsS2 = countChars(s2);
  let longest, shortest;
  if (Object.keys(countCharsS1).length > Object.keys(countCharsS2).length) {
    longest = countCharsS1;
    shortest = countCharsS2;
  } else {
    longest = countCharsS2;
    shortest = countCharsS1;
  }
  for (key in shortest) {
    if (longest[key]) {
      result += Math.min(shortest[key], longest[key])
      delete shortest[key];
      delete longest[key];
    }
  }
  return result;
}

function countChars(s) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (obj[`${char}`]) obj[`${char}`]++;
    else obj[`${char}`] = 1;
  }
  return obj
}

/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
*/
