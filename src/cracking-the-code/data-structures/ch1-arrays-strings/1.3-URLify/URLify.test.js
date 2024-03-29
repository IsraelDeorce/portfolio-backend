const { URLify } = require('./URLify')

describe('URLify', () => {
  it.each([
    [
      ['M', 'r', '%', '2', '0', 'J', 'o', 'h', 'n', '%', '2', '0', 'S', 'm', 'i', 't', 'h'],
      ['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h', ' ', ' ', ' ', ' '],
      13
    ],
    [
      ['M', 'r', 'J', 'o', 'h', 'n', 'S', 'm', 'i', 't', 'h'],
      ['M', 'r', 'J', 'o', 'h', 'n', 'S', 'm', 'i', 't', 'h'],
      11
    ],
    [
      ['I', 's', 'r', 'a', 'e', 'l', '%', '2', '0', 'i', 's', '%', '2', '0', 'm', 'y', '%', '2', '0', 'n', 'a', 'm', 'e', ',', '%', '2', '0', 'n', 'o', 't', '%', '2', '0', 'a', '%', '2', '0', 'c', 'o', 'u', 'n', 't', 'r', 'y'],
      ['I', 's', 'r', 'a', 'e', 'l', ' ', 'i', 's', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ',', ' ', 'n', 'o', 't', ' ', 'a', ' ', 'c', 'o', 'u', 'n', 't', 'r', 'y', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      32
    ],
    [
      [''],
      [''],
      0
    ],
    [
      ['a', '%', '2', '0', 'a'],
      ['a',' ', 'a',  ' ', ' '],
      3
    ],
    [
      [''],
      [' '],
      0
    ],
    [
      ['%', '2', '0'],
      [' ',  ' ', ' '],
      1
    ]
  ])('returns string formated to %s when received %s with true length as %s', (expected, charArray, n) => {
    expect(URLify(charArray, n)).toEqual(expected)
  })
})
