function addSong() {
  const songName = document.getElementById("songName").value;
  const artist = document.getElementById("artist").value;
  const runtime = document.getElementById("runtime").value;

  if (songName.trim() === "" || artist.trim() === "" || runtime.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  let table = document
    .getElementById("songTable")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  cell1.innerHTML = songName;
  cell2.innerHTML = artist;
  cell3.innerHTML = runtime;
  cell4.innerHTML = '<button class="btn-del" onclick="deleteSong(this)">Delete</button>';

  document.getElementById("songName").value = "";
  document.getElementById("artist").value = "";
  document.getElementById("runtime").value = "";
}

function deleteSong(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

document
  .getElementById("songTable")
  .addEventListener("click", function (event) {
    let target = event.target;
    if (target.tagName === "TD") {
      let songName = target.parentNode.cells[0].textContent;
      let artist = target.parentNode.cells[1].textContent;
      let runtime = target.parentNode.cells[2].textContent;
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
