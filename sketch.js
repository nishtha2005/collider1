var fixedRect, movingRect , obj1;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(300,200,50,80);
  obj1.shapeColor="green";
  wall = createSprite(100,400,50,140);
  wall.shapeColor="yellow"
  car = createSprite(1000,400,80,80);
  car.shapeColor="red";
  car.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(car,wall)){
    car.shapeColor = "yellow";
    
  }
 bounceOff(car,wall);
 
  drawSprites();
}

