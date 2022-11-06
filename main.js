mustacheX=0;
mustacheY=0;
function preload(){

    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

}
function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function draw(){

}

function take_snapshot(){
    save('mustache.png')
}
