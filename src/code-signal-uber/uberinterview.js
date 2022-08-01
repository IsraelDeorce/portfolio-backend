// Write a function that takes an integer as an input and return the next smallest number that is a palindrome.

// Example Input: 1001
// Example Output: 1009

// 1200
// 1221

// Example Input: 999
// Example Output: 1001

function findIsPalindrome(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2) {
        if (s[p1] !== s[p2]) return false
        p1++;
        p2--;
    }
    return true;
}

function findNextSmallestPalindrome(n) {
    if (n <= 0 || !Number.isInteger(n)) return -1;

    let nString = `${++n}`;
    let isPalindrome = findIsPalindrome(nString);
    while (!isPalindrome) {
        n++;
        isPalindrome = findIsPalindrome(`${n}`);
    }
    return parseInt(`${n}`);
}

// 999
// 1000
// 88481654654
// 1.5
// 2
// 99

// 1200 - 12 21
// 1000 - 10 01
// 1500 - 15 51
// 1234 - 12 21
//        13 31
// 1330 - 
// 1332 - 14 41
// 131313 - 13 2 231
// 132232 - 13 3 331
// 1322 323 - 132 3 231 // odd number cases middle value is a pivot
// 1323232 - 132 4 231
// 1 2 1
// 999


console.log(findNextSmallestPalindrome(111))
