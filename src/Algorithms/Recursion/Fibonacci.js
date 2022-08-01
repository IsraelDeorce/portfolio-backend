// F(i) = F(i-1) + F(i-2)
// O(2^n) -> Exponential

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}

console.log(fib(0));
