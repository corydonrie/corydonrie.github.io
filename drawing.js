let x = 5
let y = 5
let r = 0
let g = 0
let b = 0
let opp = 300

function setup() {
    createCanvas(400, 400);
    background(220);
    frameRate(1000);
}

function draw() {
    if (mouseIsPressed) {
        noStroke();
        fill(r, g, b,opp);
        ellipse(mouseX, mouseY, x, y);}

    if (keyIsDown(ENTER)) {
        clear();
        background(220);
    }}

function keyPressed() {
    if (keyCode === 187) {
        x += 5;
        print('x', x);}
    if (keyCode === 189) {
        x -= 5;
        print('x', x);}
    if (keyCode === 219) {
        y -= 5;
        print('y', y);}
    if (keyCode === 221) {
        y +=5;
        print('y', y);}
}

function mouseWheel(event) {
    if (keyIsDown(49)){
        r += event.delta
        if (r > 255) {
            r = 255}
        if (r < 0) {
            r = 0}
        print(r,g,b)
    }
    if (keyIsDown(50)) {
        g += event.delta
        if (g > 255) {
            g = 255}
        if (g < 0) {
            g = 0}
        print(r,g,b)
    }
    if (keyIsDown(51)) {
        b += event.delta
        if (b > 255) {
            b = 255}
        if (b < 0) {
            b = 0}
        print(r,g,b)
    }
    else{
        opp += event.delta/10
        if (opp < 0){
            opp= 0}
        if (opp > 300){
            opp = 300}
        print(opp)
    }
}

