/*
  Given two strings, write a method to decide if one is a permutation of the other.
  Hint: Permutations are the different ways in which a collection of items can be arranged
  EX: ABC -> ABC, ACB, BCA, CBA, CAB, BAC

  TODO: Check complexity of algorithm to find all permutations
*/

/* Time Complexity: O(n)
  Strings must have the same length to be a permutation
  We can use a hash to add or reduce a char number per string a and b
  In the end we just check if all char numbers are 0
*/
const checkPermutation = (a, b) => {
  if (a.length !== b.length) return false
  const hash = {}
  for (let i = 0; i < a.length; i++) {
    if (!hash[a[i]]) hash[a[i]] = 1
    else ++hash[a[i]]
    if (!hash[b[i]]) hash[b[i]] = -1
    else --hash[b[i]]
  }
  for (key in hash) {
    if (hash[key] !== 0) return false
  }
  return true
}

module.exports = {
  checkPermutation
}
