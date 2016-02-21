var video = document.getElementById('background-video');
var loopPoint = 15; // s

function loopVideo() {
  if (video.currentTime >= loopPoint) {
    video.currentTime = 0;
  }
}
video.addEventListener('timeupdate', loopVideo);
