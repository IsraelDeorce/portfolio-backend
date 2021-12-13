/*
  1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

/* Time complexity: O(n)
  We used a hash structure to easy access an ocurrence of a char
  If it is already there, then the string is not unique
*/
const isUnique = (str = '') => {
  const hash = {}
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) return false
    hash[str[i]] = 1
  }
  return true
}

/* Time complexity of O(n^2)
  Without using a data structure we need to iterate over each char and
  compare it to every other char in the array that comes after it
*/
const isUniqueNoStructure = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++)
      if (str[i] === str[j]) return false
  }
  return true
}

module.exports = {
  isUnique,
  isUniqueNoStructure
}
