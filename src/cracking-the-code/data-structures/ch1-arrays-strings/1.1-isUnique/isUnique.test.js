const { isUnique, isUniqueNoStructure } = require('./isUnique')

describe('isUnique', () => {
  it.each([
    'abcdefgh', '1abcd2efgh3', '123', 'a', 'ab', '#$_', '', '0'
  ])('returns true when string is %s', (str) => {
    expect(isUnique(str)).toBe(true)
  })

  it.each([
    'aab', 'abb', 'abbc', 'abcdefghiejk', 'ab$$c', '__', '  ', '1232'
  ])('returns false when string is %s', (str) => {
    expect(isUnique(str)).toBe(false)
  })

  describe('isUniqueNoStructure', () => {
    it.each([
      'abcdefgh', '1abcd2efgh3', '123', 'a', 'ab', '#$_', '', '0'
    ])('returns true when string is %s', (str) => {
      expect(isUniqueNoStructure(str)).toBe(true)
    })
  
    it.each([
      'aab', 'abb', 'abbc', 'abcdefghiejk', 'ab$$c', '__', '  ', '1232'
    ])('returns false when string is %s', (str) => {
      expect(isUniqueNoStructure(str)).toBe(false)
    })
  }) 
})
