// Declaring Array for Songs
// var songs = [];

// // Declaring variable for get element by ID
// var songsToDom = document.getElementById("song")

// // Adding songs to the array, unshift is front, push is end
// songs.unshift("Unchained by Van Halen on the album Fair Warnning ");
// songs.push("Don't You Give Up On Me by Lissie on the album My Wild West ");
// songs.unshift("Cry Ophelia by Adam Cohen on the album Adam Cohen ")
// songs.push("One Night Love Affair by Bryan Adams on the album Reckless ")

// // Running loop to go through songs list
// for (var i = 0; i < songs.length; i++) {
//   songs[i]
// // Sending songs back to DOM
//   songsToDom.innerHTML += `<div>${songs[i]}</div>`;
// }

var myRequest = new XMLHttpRequest();

myRequest.open("GET", "songs.json");

myRequest.send();

myRequest.addEventListener("load", executeCode);
// myRequest.addEventListener("error", errorLoadingCode);

function executeCode() {
  var data =JSON.parse(event.target.responseText);

  var songList = document.getElementById("song");

  for(currentSong in data.songs) {
    var songData = "";
    var song = data.songs[currentSong];
    songData += '<div class="song">';
    songData += '<h1>' + song.title + '</h1>';
    songData += '<div class="artist">Performed By: ';
    songData += song.artist;
    songData += '<div class="album">On The Album: ';
    songData += song.album;
    songData += '</div>';

    songList.innerHTML += songData;
  }
};


















