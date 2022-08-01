function solution(a) {
  const cleanArray = [], treesPos = [], finalArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) cleanArray.push(a[i]);
    else treesPos.push(i);
  }
  cleanArray.sort((h1, h2) => h1 - h2);
  let p1 = 0;
  let p2 = 0;
  while (p1 < cleanArray.length || p2 < treesPos.length) {
    while (treesPos[p2] === finalArray.length) {
      finalArray.push(-1)
      p2++;
    }
    if (cleanArray[p1]) {
      finalArray.push(cleanArray[p1])
      p1++;
    }
  }
  return finalArray;
}


/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.
*/
