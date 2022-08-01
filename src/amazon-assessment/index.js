const findMinMax = (i, j, arr) => {
  const minMax = [i, i]
  for(let i = i + 1; i <= j; i++) {
    if (minMax[0] > arr[i]) minMax[0] = arr[i]
    if (minMax[1] < arr[i]) minMax[1] = arr[i]
  }
  return minMax
}

const countPossibleSegments = (k, weights) => {
  // Since the difference of every tuple of (a,a) wil be 0, we can assume the length
  // of the base array as the default value of the result
  let countTuples = weights.length

  for (let i = 0; i < weights.length; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      const subArray = weights.slice(weights[i], weights[j+1])
      const difference = (Math.max(subArray) - Math.min(subArray))
      if(difference <= k) countTuples++
    }
  }
  return countTuples
}

module.exports = {
  countPossibleSegments
}
