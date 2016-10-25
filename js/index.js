var songs = ["http://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3", "http://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3", "http://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"];
var currentSong = 0;

var audio= document.getElementById('song');
var lcd = document.getElementById('lcd');
audio.src = songs[currentSong];

function mostrar() {
  lcd.textContent = "Cancion";
}

function reproducir() {
  mostrar();

  audio.play();
}
function pausa() {
  audio.pause();
}
function siguiente() {
  if (currentSong == (songs.length-1)){
    currentSong = 0;
  }
  else {
    currentSong++;
  }
  audio.src = songs[currentSong];
  reproducir();
}
function anterior() {
  if (currentSong == 0){
    currentSong = songs.length-1;
  }
  else {
    currentSong--;
  }
  audio.src = songs[currentSong];
  reproducir();
}
