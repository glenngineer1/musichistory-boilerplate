
function executeThisCodeIfXHRFails () {
  // console.log("An error occurred while transferring the data");
}

function executeThisCodeAfterFileIsLoaded () {
  // console.log(this.responseText);

var data = JSON.parse(this.responseText);
// console.log("data", data);

var songList = document.getElementById("songs");

songList.addEventListener("click", removeElement);

function removeElement(event) {
    // event.target(all).remove();
    console.log("",event.all);
}

for( currentSong in data.songs) {
  var songData = "";
  var song = data.songs[currentSong];
  songData += "<div class='all'>";
  songData += "<div class='title-song'>Song Title: ";
  songData += song.title;
  songData += "</div>";
  songData += "<div class='artist-song'>Performed by: ";
  songData += song.artist;
  songData += "</div>";
  songData += "<div class='album-song'>On the album: ";
  songData += song.album;
  songData += "</div>";
  songData += "<input type='button' id='deleteButton' value='delete'></input>"
  songData += "</div>";

  songList.innerHTML += songData;
  }
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

myRequest.open("get", "songs.json");

myRequest.send();



