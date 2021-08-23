function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 500 , 400 );
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects ";
    document.getElementById("head").value;
}

function modelLoaded(){
    console.log(" My Model Has Loaded !! ");
    status = true;

}