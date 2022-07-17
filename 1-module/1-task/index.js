function factorial(n) {
  let value = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      value = value * i;
    }
    return value;
  }
  if (n <= 1) {
    return 1;
  }
}
