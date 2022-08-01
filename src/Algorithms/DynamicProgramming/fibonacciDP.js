// F(i) = F(i-1) + F(i-2)
// O(n) -> Linear with memoization or Tabulation(fibBottonUp)

const fibMemo = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  const fibN = fibMemo(n-1) + fibMemo(n-2);
  memo[n] = fibN;
  return fibN;
}

const fibBottonUp = (n) => {
  if (n <= 2) return 1;
  const botton_up = [];
  botton_up[1] = 1;
  botton_up[2] = 1;
  for (let i = 3; i <= n; i++)
    botton_up[i] = botton_up[i-1] + botton_up[i-2];
  return botton_up[n];
}

console.log(fibBottonUp(5));
