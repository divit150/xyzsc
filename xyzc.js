function preload() {}

function setup() {
    canvas = createCanvas(250, 250);
    canvas.center();
    video=createCapture(VIDEO);
 video.size(250, 250);
 video.hide();
}

function te() {
    save("my_picture.png");
}
function draw(){
    image(video,0,0,250,250);
}