const { checkPermutation } = require('./checkPermutation')

describe('checkPermutation', () => {
  it.each([
    ['ABC', 'ABC'],
    ['ABC', 'ACB'],
    ['ABC', 'BCA'],
    ['ABC', 'CBA'],
    ['ABC', 'CAB'],
    ['ABC', 'BAC'],
    ['CBA', 'ABC'],
    ['AAAAAB', 'AAABAA'],
    ['A', 'A'],
    ['_-', '-_'],
    ['', '']
  ])('returns true for strings %s and %s', (a, b) => {
    expect(checkPermutation(a, b)).toBe(true)
  })

  it.each([
    ['A', 'AB'],
    ['A', 'a'],
    ['ABC', 'ABB'],
    ['BC', 'B'],
    ['_-', '__']
  ])('returns false for strings %s and %s', (a, b) => {
    expect(checkPermutation(a, b)).toBe(false)
  })
})
