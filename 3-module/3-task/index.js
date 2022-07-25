function camelize(str) {
  array = str.split("");
  let index = array.indexOf("-");
  let arrayIndex = [];
  while (index != -1) {
    arrayIndex.push(index);
    index = array.indexOf("-", index + 1);
  }
  for (let i = 0; i < arrayIndex.length; i++) {
    if (arrayIndex[i] + 1 !== array.length) {
      array[arrayIndex[i] + 1] = array[arrayIndex[i] + 1].toUpperCase();
    }
  }
  let resultString = array.join("");
  return resultString.replace(/-/gi, "");
}
