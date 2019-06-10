class ball{
    constructor(x,y,w,h,r,b){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = x;
        this.b = y;

    }
    ballDraw(){
        ellipse(this.x , this.y , this.w , this.h);
    }
    moveL(){
        this.x -= 5;
    }
    moveRand(){
        this.x += random(-5,5);
        this.y += random(-5,5);
    }
    changeFill(x,y){
        fill(this.x,0,this.y);
    }
    ballBoundary(x,y){
        if (this.x >= 255){
            this.x -= 5}
        if (this.y >= 255){
            this.y -= 5}
        if (this.x <= 0){
            this.x += 5}
        if (this.y <= 0){
            this.y += 5}
    }
}

function setup() {
    createCanvas(255, 255);
    ball1 = new ball(1000,10,10,10);
    ball2 = new ball(127.5,127.5,20,20);
    ball3 = new ball(127.5,127.5, 30,30);
}

function draw() {
    background(220);
    ball2.ballDraw();
    ball2.changeFill();
    ball2.moveRand();
    ball2.ballBoundary();
    ball3.ballDraw();
    ball3.changeFill();
    ball3.moveRand();
    ball3.ballBoundary();
}