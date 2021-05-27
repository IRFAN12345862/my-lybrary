
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixRect1
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixRect1=createSprite(200,50,50,50)
  fixRect1.shapeColor='blue'
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
  if(isTouching(movingRect,fixRect1)){
    movingRect.shapeColor = "blue";
    fixRect1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixRect1.shapeColor = "green"
  }
//bounceOff(movingRect,fixedRect)
  drawSprites();
}

