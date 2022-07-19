function sumSalary(salaries) {
  let arraySal = [];
  for (let prop in salaries) {
    if (
      typeof salaries[prop] === "number" &&
      isFinite(salaries[prop]) &&
      !isNaN(salaries[prop])
    ) {
      arraySal.push(salaries[prop]);
    }
  }
  let result = arraySal.reduce((sum, current) => sum + current, 0);
  return result;
}
