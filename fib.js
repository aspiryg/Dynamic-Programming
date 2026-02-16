const fib = (n, mem = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (mem[n]) {
    return mem[n];
  }
  mem[n] = fib(n - 1, mem) + fib(n - 2, mem);

  return mem[n];
};

function fibIterative(n) {
  let a = 0n;
  let b = 1n;

  for (let i = 1; i < n; ++i) {
    [a, b] = [b, a + b];
  }
  return b;
}

const startIt = performance.now();
console.log(fibIterative(50));
const endIt = performance.now();
console.log(`Execution time iterative: ${endIt - startIt} ms`);

const start = performance.now();
console.log(fib(50));
const end = performance.now();
console.log(`Execution time recurrisive: ${end - start} ms`);

const startIt2 = performance.now();
console.log(fibIterative(50));
const endIt2 = performance.now();
console.log(`Execution time iterative: ${endIt2 - startIt2} ms`);
