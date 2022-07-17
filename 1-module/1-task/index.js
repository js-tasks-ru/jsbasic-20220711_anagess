function factorial(n) {
  let value = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      value = value * i;
    }
    return value;
  } else if ((n = 1) || (n = 0)) {
    return 1;
  }
}
