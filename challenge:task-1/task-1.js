document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    switchToEdit();
  } else if (event.ctrlKey && event.key === "d") {
    event.preventDefault();
    switchToView();
  }
});

const textDiv = document.getElementById("textDiv");
const editArea = document.getElementById("editArea");
const saveButton = document.getElementById("saveButton");
let originalStyle = window.getComputedStyle(
  document.getElementById("textDiv")
).cssText;

document.getElementById("saveButton").addEventListener("click", function () {
  saveChanges();
});

function switchToEdit() {
  textDiv.style.display = "none";
  editArea.style.display = "block";
  saveButton.style.display = "block";
  editArea.value = textDiv.innerText;
  editArea.focus();
}

function saveChanges() {
  textDiv.style.display = "block";
  editArea.style.display = "none";
  saveButton.style.display = "none";

  textDiv.innerText = editArea.value;
  //   Save the original style
  textDiv.style.cssText = originalStyle;

  const text = document.getElementById("editArea").value;
  alert("Changes saved!");
}
