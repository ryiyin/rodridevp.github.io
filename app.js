var video = document.querySelector("video");

video.pause();

setTimeout(function () {
  video.play();
}, 5000);

video.playbackRate = 0.7;
video.currentTime = 1;
