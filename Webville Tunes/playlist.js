
 widnow.onload = init;
function init() {
  var button =document.getElementById("addButton");
  button.onclick = handleButtonClick;
  function handleButtonClick() {
    alert("Button was clicked);
  function handleButtonCliick() {
      var textInput = document.getElementById("songTextInput");
      var songName = textInput.value;
      alert("Adding " + songName);
      if(songName == "") {
        alert(Please enter a song");
              } else {
          alert("Adding " + songName); }
      var li + document.createElement("li")
       li.innerHTML = songName;
       var ul = document.getElementById("playlist");
      ul.appendChild(li);
