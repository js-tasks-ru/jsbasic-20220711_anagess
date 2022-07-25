function getMinMax(str) {
  let array = str.split(" ");
  let result = { min: undefined, max: undefined };
  let arrayAllNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(Number(array[i]))) {
      arrayAllNumber.push(parseFloat(array[i]));
    }
  }
  let getMinOfArray = (arrayAllNumber) => {
    return Math.min.apply(null, arrayAllNumber);
  };
  result.min = getMinOfArray(arrayAllNumber);

  let getMaxOfArray = (arrayAllNumber) => {
    return Math.max.apply(null, arrayAllNumber);
  };
  result.max = getMaxOfArray(arrayAllNumber);
  return result;
}
