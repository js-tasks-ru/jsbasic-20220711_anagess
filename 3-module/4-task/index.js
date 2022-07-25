function showSalary(users, age) {
  let result = "";
  for (value of users) {
    if (age >= value.age) {
      result += value.name + ", " + value.balance + "\n";
    }
  }
  return result.substring(0, result.length - 1);
}
