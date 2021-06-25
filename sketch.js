var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1000,400);
  speed=random(223,321);
  thickness=random(22,83)
  weight=random(400,800);
 bullet=createSprite(50,200,50,50);
 bullet.shapeColor="black";
 bullet.velocityX=speed;
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="black";
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
if(hasCollided(lbullet,lwall)){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}