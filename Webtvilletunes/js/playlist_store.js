function save(item) {
  var playlistArray= getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist",Json.stringify(PlaylistArray));
}
frunction loadPlaylist() {
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("playlist");
  if (playlistArray !=null) {
    for (var i =0; i < playlistArray.length; i++) {
      var li = document.creatElement("li");
      li.innerHTML = playlistAray[i];
      ul.appendChild(li);
    }
  }
}
function getSavedSongs() {
  return getStoreArray("playslist");
}
function getStoreArray(key) {
  var playlistArray = localStorage.getItem(key);
  if (playlistArray == null || playlistArray == ""){
    playlistArray = new Array();
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  return playlistArray;
}
