rectColor = "red";
circleColor = "blue";

function setup(){
    canvas = createCanvas(400, 280);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
}
tint_color= "";

function draw(){
    image(video,0,0,640,480);
    fill(rectColor);
    circle(30, 30, 40);
    fill(circleColor);
    rect(15, 50, 30, 180);
    fill(rectColor);
    circle(30, 460, 40);
    fill(circleColor);
    rect(50, 15, 300, 30);
    fill(rectColor);
    circle(370, 30, 40);
    fill(circleColor);
    rect(355, 50, 30, 180);
    fill(rectColor);
    circle(30, 250, 40);
    fill(circleColor);
    rect(50, 235, 300, 30);
    fill(rectColor);
    circle(370, 250, 40);
    fill(circleColor);

}

function take_snapshot(){
    save('me.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}