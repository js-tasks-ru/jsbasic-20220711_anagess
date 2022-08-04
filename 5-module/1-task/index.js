function hideSelf() {
myButt = document.querySelector(".hide-self-button")
console.log(myButt)
myButt.onclick = function() {
  myButt.hidden = true;
}
}
