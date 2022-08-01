function revertArray(arr) {
  let p1 = 0, p2 = arr.length - 1;
  while (p1 < p2) {
    const aux = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = aux;
  }
}

revertArray([10, 20, 30, 40, 50]);
