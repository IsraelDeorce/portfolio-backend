/*
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
*/


const stringCompression = (str) => {
  let compressed = ''
  let currentChar = ''
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== currentChar) {
      currentChar = str[i]
      compressed = compressed.concat(`${currentChar}1`)
    } else {
      const newValue = parseInt(compressed.charAt(compressed.length - 1)) + 1
      compressed = compressed.slice(0, -1) + newValue
    }
  }
  if(compressed.length < str.length) return compressed
  return str
}

console.log(stringCompression('aaabbc'))

module.exports = {
  stringCompression
}
