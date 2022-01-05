/*
  Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)

EXAMPLE
Input: "Mr John Smith     ", 13
Output: "Mr%20John%20Smith"
*/

/* Time Complexity: O(n)
  We used a char array since javascript strings are imutable and our algorithm
  should run in place. After counting the amount of true whitespaces and knowing
  that %20 takes 3 positions in the array compared to 1 of a whitespace,
  we can iterate the array backwards and use the jump constant which is the
  number of whitespaces * 2 to know where exactly to place the char.
*/
const URLify = (charArray, n) => {
  if (n === 0) return ['']

  let nWhiteSpaces = 0
  for (let i = 0; i < n; i++) {
    if (charArray[i] === ' ') nWhiteSpaces++
  }
  let jump = nWhiteSpaces * 2

  for (let i = n-1; i >= 0 && nWhiteSpaces !== 0; i--) {
    if (charArray[i] === ' ') {
      nWhiteSpaces--
      charArray[i + jump] = '0'
      charArray[i + jump-1] = '2'
      charArray[i + jump-2] = '%'
      jump = jump - 2
    } else {
      charArray[i + jump] = charArray[i]
    }
  }
  return charArray
}

const notInPlaceSolutions

module.exports = {
  URLify,
}
