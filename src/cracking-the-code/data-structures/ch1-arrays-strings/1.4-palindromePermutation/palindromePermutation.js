/*
Given a string, write a function to check if it is a permutation of a palindrome.
  A palindrome is a word or phrase that is the same forwards and backwards.
  A permutation is a rearrangement of letters.

The palindrome does not need to be limited to just dictionary words.
EXAMPLE
  Input: Tact Coa
  Output: True (permutations: "taco cat". "atco cta". etc.)
*/

/* Time Complexity: O(n)
Even: abba
Odd: aba

Even: afghrhfgar
Odd: ignore whitespaces and allow one letter alone
*/
const palindromePermutation = (str) => {
  str = str.replace(' ', '')
  const hash = {}
  for (let i = 0; i < str.length; i++) {
    const parsedChar = str[i].toLowerCase()
    if (hash[parsedChar]) ++hash[parsedChar]
    else hash[parsedChar] = 1
  }
  
  let countOdd = 0
  for (key in hash) {
    if (!(hash[key] % 2 === 0)) {
      if (str.length % 2 === 0) return false
      countOdd++
      if (countOdd > 1) return false
    }
  }
  return true
}

module.exports = {
  palindromePermutation
}
