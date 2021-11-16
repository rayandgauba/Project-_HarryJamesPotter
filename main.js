var song = "";

function preload() {
    song = loadSound("Harry Potter Theme Song.mp3");
    song = loadSound("Peter Pan Theme Song.mp3");
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.position(490,180);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,400);
}