function fib(num):
  let i = [0, 1]
  for (int i = 2; i < num.length; i++) {
    fib[i] = fib[i] - 1 + fib[i] + 2
    return i
  }

fib(20)
