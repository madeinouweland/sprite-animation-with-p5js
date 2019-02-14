let spriteMap = [
  { x: 0, y: 0 },
  { x: 150, y: 0 },
  { x: 300, y: 0 },
  { x: 450, y: 0 },
  { x: 0, y: 150 },
  { x: 150, y: 150 },
  { x: 300, y: 150 },
  { x: 450, y: 150 },
]

let index = 0;
let time = 0;
let spriteSheet;
let spriteWidth = 150;
let spriteHeight = 150;

function preload() {
  spriteSheet = loadImage('spritesheet.png');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background("#fff");

  cell = spriteMap[index];
  let sprite = spriteSheet.get(cell.x, cell.y, spriteWidth, spriteHeight);
  image(sprite, 0, 0);

  time += .3;
  if (time > 1) {
    index++;
    if (index > spriteMap.length - 1) {
      index = 0;
    }
    time = 0;
  }
}
