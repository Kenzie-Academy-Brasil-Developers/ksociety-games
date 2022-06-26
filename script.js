

function play(){
    let audio = new Audio('./medias/soundtrack.mp3')
    audio.play();
    audio.volume = 0.3;
    document.getElementById('soundtrackmp3').removeAttribute("onclick");
}
function togglemp3() {
    var x = document.getElementById("toggleSoundtrack");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

