const { oneWay } = require('./oneWay')

describe('oneWay', () => {
  it.each([
    ['pale', 'ple'],
    ['pales', 'pale'],
    ['pale', 'bale'],
    ['', ''],
    ['', ' '],
    [' ', ''],
    ['a', 'a'],
    ['ab', 'a'],
    ['abc', 'abc'],
    ['a', 'ab'],
    ['xab', 'xa'],
    ['xabc', 'xabc'],
    ['xa', 'xab']
  ])('returns true for strings %s and %s', (s1, s2) => {
    expect(oneWay(s1, s2)).toEqual(true)
  })

  it.each([
    ['pale', 'bake'],
    ['', '  '],
    ['  ', ''],
    ['', 'x  '],
    ['x  ', ''],
    ['abc', 'a'],
    ['a', 'abc'],
    ['xabc', 'xa'],
    ['xa', 'xabc']
  ])('returns false for strings %s and %s', (s1, s2) => {
    expect(oneWay(s1, s2)).toEqual(false)
  })
})
