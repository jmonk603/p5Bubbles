var x,y,d,hue,a;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    colorMode(HSB);
    angleMode(DEGREES);
    a = 0;

    //noStroke();
    background(255,5);

    for(let i = 0; i < 100; i++){
        circles();
    }
}

function draw() {
    push();
    translate(width/2, height/2);
    rotate(a);
    ellipse(0,0,350,150);
    a += 5;
    pop();
}

function circles() {
    x = random(width);
    y = random(height);
    d = random(50,200);
    hue = random(120, 255);

    fill(hue, 255, 255, 0.1);
    circle(x, y, d);
}