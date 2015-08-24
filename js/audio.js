function toggleSong() {
  var player = document.getElementById('player');
  var button = document.getElementById('btn-player');

  if (player.paused) {
    player.play();
    button.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    player.pause();
    button.innerHTML = '<i class="fa fa-play"></i>';
  }
}
