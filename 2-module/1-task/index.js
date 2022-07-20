function sumSalary(salaries) {
  let arraySal = [];
  for (let prop in salaries) {
    if (typeof salaries[prop] === "number" && isFinite(salaries[prop])) {
      arraySal.push(salaries[prop]);
    }
  }
  return arraySal.reduce((sum, current) => sum + current, 0);
}
