/**
 * @param {string} s
 * @return {number}
 */
// Given a string s, find the length of the longest substring
// without repeating characters.

// No repeating chars
var lengthOfLongestSubstring = function (s) {
  // We need two points for a sliding window approach and a mapCharIndex hashmap
  let windowStart = 0, windowEnd = 0, result = 0;
  const mapCharIndex = {};

  // The end of the Window will walk trough the whole string
  while (windowEnd < s.length) {
    const currChar = s[windowEnd];

    // Slides the windowStart to the right after the repeating char
    let charIndex = mapCharIndex[currChar]
    if (charIndex >= windowStart) windowStart = charIndex + 1;

    // Asign the latest index of the current char
    mapCharIndex[currChar] = windowEnd;

    // Check if the new window is the longest
    const windowSize = windowEnd - windowStart + 1;
    result = Math.max(result, windowSize);

    windowEnd++;
  }
  return result;
};

var lengthOfLongestSubstringWithKDistinctChars = function (s, k) {
  const charCount = {};
  let windowStart = 0, windowEnd = 0, max = 0, currLength = 0;

  while (windowEnd < s.length) {
    const currChar = s[windowEnd];

    if (!charCount[currChar]) charCount[currChar] = 1
    else charCount[currChar]++

    while (Object.keys(charCount).length > k) {
      const firstChar = s[windowStart]
      charCount[firstChar]--;
      currLength--;
      windowStart++;
      if (charCount[firstChar] === 0) delete charCount[firstChar];
    }

    max = Math.max(max, ++currLength);
    windowEnd++;
  }
  return max
};

// lengthOfLongestSubstring("abcabcbb");

console.log(lengthOfLongestSubstringWithKDistinctChars("aaahhibccccccccccc", 2));
