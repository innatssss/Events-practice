function addSong() {
  var songName = document.getElementById("songName").value;
  var artist = document.getElementById("artist").value;
  var runtime = document.getElementById("runtime").value;

  if (songName.trim() === "" || artist.trim() === "" || runtime.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  var table = document
    .getElementById("songTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow();

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = songName;
  cell2.innerHTML = artist;
  cell3.innerHTML = runtime;
  cell4.innerHTML = '<button onclick="deleteSong(this)">Delete</button>';

  document.getElementById("songName").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("runtime").value = "";
}

function deleteSong(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

document
  .getElementById("songTable")
  .addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "TD") {
      var songName = target.parentNode.cells[0].textContent;
      var artist = target.parentNode.cells[1].textContent;
      var runtime = target.parentNode.cells[2].textContent;
      document.getElementById("details").innerHTML =
        "Details: Song Name - " +
        songName +
        ", Artist - " +
        artist +
        ", Runtime - " +
        runtime +
        "s";
    }
  });
