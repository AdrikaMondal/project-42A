var bg, spacecraft1, spacecraft2, spacecraft3, spacecraft4
var hasDocked = false, iss, spacecraft, issImage

function preload(){
  bg = loadImage("spacebg.jpg");
  issImage = loadAnimation("iss.png");

  spacecraft1 = loadAnimation("spacecraft1.png");
  spacecraft2 = loadAnimation("spacecraft2.png");
  spacecraft4 = loadAnimation("spacecraft4.png");
  spacecraft3 = loadAnimation("spacecraft3.png");
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(400, 200, 50, 50);
  iss.addAnimation("iss", issImage);
  iss.scale=0.9;

  spacecraft=createSprite(350,300,50,50);
  spacecraft.addAnimation("spaceCraft1", spacecraft1);
  spacecraft.addAnimation("spaceCraft2", spacecraft2);
  spacecraft.addAnimation("spaceCraft3", spacecraft3);
  spacecraft.addAnimation("spaceCraft4", spacecraft4);
  spacecraft.scale=0.2;
}

function draw() {
  background(bg); 
  
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x +2;
    spacecraft.changeAnimation("spaceCraft4", spacecraft4);
  }

  if(keyIsDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x -2;
    spacecraft.changeAnimation("spaceCraft3", spacecraft3);
  }

  if(keyIsDown(UP_ARROW)){
    spacecraft.y = spacecraft.y -2;
    spacecraft.changeAnimation("spaceCraft2", spacecraft2);
  }

  if(keyIsDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y +2;
    spacecraft.changeAnimation("spaceCraft2", spacecraft2);
  }
  
  drawSprites();
  if(spacecraft.x <= 350 && spacecraft.y <= 290){
    fill("white");
    text("Docking succesfull!", 330,366);
  }
  fill("white");
  text("x = "+ mouseX + "y = " +mouseY, mouseX, mouseY)
}