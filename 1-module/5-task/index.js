function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  } else if (str.length > maxlength) {
    let trunkString = str.slice(0, maxlength - 1);
    return trunkString + "…";
  }
}
