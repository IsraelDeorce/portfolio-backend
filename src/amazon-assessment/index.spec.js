const { countPossibleSegments } = require('./')

describe('amazon-assessment', () => {
  it.each([
    [3, [1, 3, 6]],

  ])('returns for k %s and weights %s', (k, weights) => {
    expect(countPossibleSegments(k, weights)).toEqual(5)
  })
})
