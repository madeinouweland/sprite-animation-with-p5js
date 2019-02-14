# Sprite animation with p5js

This repository loads a spritemap with a sequence of 8 images that results in:

![ufo](https://github.com/madeinouweland/sprite-animation-with-p5js/blob/master/ufo.gif)

The spritemap looks like this:

![spritemap](https://github.com/madeinouweland/sprite-animation-with-p5js/blob/master/sheetdesign.png)

Each cell is 150x150 pixels and we keep a list of cells in this image like this:

```
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
```

## Get sprite from spriteMap

A P5 image object has a method [get](https://p5js.org/reference/#/p5/get) that gets a copy of an image area.

## Animating

By cycling through the spriteMap and copying the desired part, we create the illusion of animation.

```
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
```
