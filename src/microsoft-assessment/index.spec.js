const { question1, question2, question3 } = require('./')

describe('microsoft-assessment', () => {
//   it.each([
//     [[1,2,2,1]],
//     [[]],
//     [[1,2,3,4,5,6,8,7,3,5,8,2,4,7,1,6]]
//   ])('returns for string %s', (arr) => {
//     expect(question1(arr)).toEqual(true)
//   })

//   it.each([
//     [[7,7,7]],
//     [[1,2,2,3]],
//     [[1,2,3,4,5,6,8,7,3,5,8,2,4,7,6]]
//     [[1]]
//   ])('returns for string %s', (arr) => {
//     expect(question1(arr)).toEqual(false)
//   })

  it.each([
    ['abacde', 2],
    ['dddd', 4],
    ['world', 1],
    ['', 0],
    ['0', 1],
    ['aab', 2],
    ['abcdefghijklm', 1]
  ])('returns for string %s', (str, result) => {
    expect(question3(str)).toEqual(result)
  })

//   it.each([
//     ['pale']
//   ])('returns for string %s', (s1) => {
//     expect(question3(s1)).toEqual(s1)
//   })
})
