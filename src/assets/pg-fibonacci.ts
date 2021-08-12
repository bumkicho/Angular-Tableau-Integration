// recursive fib
// fibonacci sequence
const fib = (n: number): number => {
  if (n <= 2) return 1;
  if (n == 3) return 2;

  // returns sum of previous two numbers, but this could go on forever if it goes over 50
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
console.log(fib(7));

const dib = (n: number): void => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};
//O(2 to the n) time
//O(n) space

const lib = (n: number): void => {
  if (n <= 1) return;
  dib(n - 2);
  dib(n - 2);
};
//O(2 to the n/2) time -> O(2 to the n) time
//O(n) space

// Store duplicate pattern
// Memoization
let testMemo = [1, 2, 3];
console.log(testMemo[0]);
console.log(2 in testMemo);

const fibM = (n: number, memo: number[]): number => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    memo[n] = 1;
    return 1;
  }
  memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo);
  console.log(memo);
  return memo[n];
};

//console.log(fibM(6,[]));
//console.log(fibM(7,[]));
console.log(fibM(10, [0]));
