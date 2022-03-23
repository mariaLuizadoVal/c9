 
var box ;




function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 30, 30);
  box.shapeColor = "yellow" ; 

}
 createEdgesSprites();
function draw() 
{
  background(30);

//box.bounceOff(rightEdge);
//box.bounceOff(leftEdge);
//box.bounceOff(topEdge);
//box.bounceOff(bottomEdge);


 
if (keyDown("right")) {
  box.x = box.x +3 ; 
}

if (keyDown("left")) {
  box.x = box.x -3 ; 

}

if (keyDown("up")) {
  box.y = box.y -3 ; 

}

if (keyDown("down")) {
  box.y = box.y +3 ; 

}

drawSprites ();

}





