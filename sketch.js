var fr,mr;
var vr,tr;

function setup() {
  createCanvas(800,400);

  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(350, 200, 50, 50);

  fr.shapeColor="purple";
  mr.shapeColor="purple";

  vr=createSprite(400, 200, 50, 50);
  tr=createSprite(400, 100, 50, 50);

   tr.velocityY=4;
   vr.velocityY=-4;
  

  vr.shapeColor="green";
  tr.shapeColor="blue";
 
 
 
 
  console.log(fr.x-mr.x);

}
function draw() {
  background(0);  
  mr.x=mouseX;
  mr.y=mouseY;

 bounceOff(vr,tr);
 /*
 if(isTouching(vr,mr))
 {
  vr.shapeColor="yellow";
  mr.shapeColor="yellow";
}
else{
  vr.shapeColor="red";
  mr.shapeColor="red";
}
*/
 
drawSprites();
}

