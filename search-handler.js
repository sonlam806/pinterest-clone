const searchBoxContainer = document.getElementById("searchBoxContainer");
const searchIcon = document.getElementById("iconSearch");

function searchFocus() {
  searchBoxContainer.style.border = "2px solid dodgerblue";
  searchIcon.style.display = "none";
}

function searchBlur() {
  searchBoxContainer.style.border = "none";
  searchIcon.style.display = "flex";
}

