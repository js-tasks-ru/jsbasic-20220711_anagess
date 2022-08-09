function toggleText() {
let togButt = document.querySelector(".toggle-text-button");
let div = togButt.nextElementSibling
function onClickHidden() {
  if (!div.hasAttribute("hidden")){
    div.setAttribute("hidden", "true")
  } else if (div.hasAttribute("hidden")) {
    div.removeAttribute('hidden')
  }
}
togButt.addEventListener('click', onClickHidden)
}
