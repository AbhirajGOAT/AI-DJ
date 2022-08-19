song="";
leftWrist_Score = 0;
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
righttWrist_y = 0;

function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500, 600);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',got_Poses);
}
function modelLoaded(){
    console.log("Model is initialised");
}
function got_Poses(results) {
    if(results.length>0)
    {
        console.log(results);

        leftWrist_Score = results[0].pose.keypoints[9].score;
        console.log("leftWrist_Score ="+leftWrist_Score)  ;

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x ="+leftWrist_x + "leftWrist_y ="+leftWrist_y);

        rightWrist_x = results[0].pose.leftWrist.x;
        rightWrist_y = results[0].pose.leftWrist.y;
        console.log("rightWrist_x ="+rightWrist_x + "rightWrist_y ="+rightWrist_y);
        
    }
}
function draw(){
    image(video,0,0,500,600);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#eb2f0e");
	stroke("#eb0e0e");


    if (leftWrist_Score>0.2)
    {

    circle(leftWrist_x,leftWrist_y,20);
	InNumberleftWristY = Number(leftWristY);
	remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "volume ="+volume;
    song.setVolume(volume);


}
}