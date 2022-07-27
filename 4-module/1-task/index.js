function makeFriendsList(friends) {
  const ul = document.createElement("ul");
  document.body.append(ul);
  for (value of friends) {
    let li = document.createElement("li");
    li.innerHTML = value.firstName + " " + value.lastName;
    ul.append(li);
  }
  return ul;
}
