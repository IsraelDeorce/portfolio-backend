const { palindromePermutation } = require('./palindromePermutation')

describe('palindromePermutation', () => {
  it.each([
    'Tact Coa', 'civic', 'ivicc', 'civicdd', '', 'a', ' '
  ])('returns true for palindrome permutation string %s', (str) => {
    expect(palindromePermutation(str)).toEqual(true)
  })

  it.each([
    'Tact Co', 'civil', 'livci', 'civicdda'
  ])('returns false for non palindrome permutation string %s', (str) => {
    expect(palindromePermutation(str)).toEqual(false)
  })
})
