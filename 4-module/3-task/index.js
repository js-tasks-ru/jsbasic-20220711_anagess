function highlight(table) {
 let tr = table.querySelectorAll("tr")
 for (let i = 1; i < tr.length; i++){
 let status = tr[i].cells[3].getAttribute("data-available")
  if (status === "true"){
    tr[i].classList.add("available")
  }
  if  (status === "false") {
    tr[i].classList.add("unavailable")
  }
  if (!tr[i].cells[3].hasAttribute("data-available")){
    tr[i].setAttribute("hidden", "false")
  }
}
  for (let i = 1; i < tr.length; i++){
    gender = tr[i].cells[2];
    if (gender.innerText === "m"){
      tr[i].classList.add("male")}
     if (gender.innerText === "f"){
      tr[i].classList.add("female")
  }
 }
 for (let i = 1; i < tr.length; i++){
  age = tr[i].cells[1];
  if (Number(age.innerText) < 18) {
    tr[i].style = "text-decoration: line-through"
   }
}
}
