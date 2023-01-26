let width = window.innerWidth;
let height = window.innerHeight;
let rad; 
let a;
let inc;

function setup() {
  createCanvas(width, height);
  background(0);
  a = HALF_PI;
  inc = TWO_PI / 108000;
  rad = min(width, height) / 3;
}

function draw() {
  stroke("white");
  strokeWeight(2);
  point(width / 2 + (rad * cos(a)), (height / 2) + (rad * sin(a)));
  a += inc;
}
