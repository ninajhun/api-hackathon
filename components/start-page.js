
var video = document.querySelector("video");
var videos = [
 "./img/arc-de-triomphe.mp4" , "./img/hot-air-balloons.mp4", "./img/ocean.mp4", "./img/sf.mp4"
]

window.addEventListener("load", getRandomVideo)

function getRandomVideo(){
  shuffle(videos);
  video.setAttribute("src", videos[0]);
}

function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
    var randomPosition = Math.floor(Math.random() * array.length);
    var placeHolder = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = placeHolder;
  }
}
