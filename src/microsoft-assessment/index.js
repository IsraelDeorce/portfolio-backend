/**/

const question1 = (A) => {
  // If the number of elements in the array id ODD, then it is not possible to make pairs for all elements
  if (A.length % 2 !== 0) return false

  // Loop through the array and count the occurence of each element
  const occur = {}
  for (let i = 0; i < A.length; i++) {
    if (occur[A[i]]) occur[A[i]] = occur[A[i]] + 1
    else {
      occur[A[i]] = 1
    }
  }

  // every element must have an even number of occurences to make a pair
  for (let ele in occur) {
    if (occur[ele] % 2 !== 0) return false
  }
  return true
}

const question2 = (s1) => {
  return s1
}

const question3 = (S) => {
  if (!S.length) return 0

  const occur = {}
  for (let i = 0; i < S.length; i++) {
    if (occur[S[i]]) occur[S[i]] = occur[S[i]] + 1
    else {
      occur[S[i]] = 1
    }
  }

  let countSubstrings = 0
  while (Object.keys(occur).length !== 0) {
    for (let ele in occur) {
      console.log('occur ele:', occur[ele])
      if (occur[ele] > 1) {
        occur[ele] = occur[ele] - 1
      } else
        delete occur[ele]
    }
    countSubstrings++
    console.log('keys', Object.keys(occur).length)
  }
  return countSubstrings
}

module.exports = {
  question1,
  question2,
  question3
}
