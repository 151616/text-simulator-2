function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(25,105)
    canvas = createCanvas(550,500);
    canvas.position(775,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function draw(){
    background("#ADD8E6");

}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}