/*
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale,   ple -> true
pales,  pale -> true
pale,   bale -> true
pale,   bake -> false
*/


const oneWay = (s1, s2) => {
  const lengthDif = s1.length - s2.length
  let bigger = s1
  let smaller = s2
  if (lengthDif > 1 || lengthDif < -1) return false
  if (lengthDif === -1) {
    bigger = s2
    smaller = s1
  }

  let biggerPointer = 0
  let smallerPointer = 0
  let edits = 0
  while (biggerPointer < bigger.length) {
    const isDifferent = bigger[biggerPointer] !== smaller[smallerPointer]
    if (isDifferent) edits++
    if (isDifferent && lengthDif) biggerPointer++
    else {
      biggerPointer++
      smallerPointer++
    }
    if (edits > 1) return false
  }
  return true
}

module.exports = {
  oneWay
}
