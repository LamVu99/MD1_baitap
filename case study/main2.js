var audio = new Audio("https://www.mp3saavan.com/wp-content/uploads/2021/11/Die-For-You.mp3");

audio.oncanplaythrough = function(){
    audio.play();
}

audio.loop = true;

audio.onended = function(){
    audio.play();
}
