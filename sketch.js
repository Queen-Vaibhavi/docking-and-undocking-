var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var scott,scottImage,prestart;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
  scottImage = loadImage("image-removebg-preview (24).png");

  // adding font
  prestart = loadFont('Press_Start_2P/PressStart2P-Regular.ttf');

}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;

  scott = createSprite(475,240,0,20);
  scott.addImage(scottImage);
  scott.scale = 0.5
}

function draw() {
  background(bg);
  
fill("white");
textSize(10);
textFont(prestart);
text("hello! all the best on your first dock! ",20,280);
text("you can take help if you want,as I am an ",20,300);
text("experienced astronaut.",20,320);
  spacecraft.addImage(scimg);
  if(!hasDocked){

    // spacecraft = spacecraftx + random(-1,1);❌❌
    // spacecraft.x = spacecraft.x + Random(-1,1);❌❌
    // spacecraft.x = spacecraft.x + randomNumbers(-1,1);❌❌
    spacecraft.x = spacecraft.x + random(-1,1);//✔✔
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}

  // if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
   // hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking Successful!", 200, 300);r
  // }❌❌

  //if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
   //hasDocked = true;
  //textSize(25);
  //fill("white")
  //text("Docking Successful!", 200, 300);
  //}❌❌

  // if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  //   hasDocked = true;
  //   textSize(25);
  //   fill("white")
  //   text("Docking UnSuccessful!", 200, 300);
  // }❌❌

  if(spacecraft.y <= (iss.y+40) && spacecraft.x <= (iss.x-10)){
 hasDocked = true;
     textSize(25);
     fill("white")
     textFont("arial");
     text("Docking Successful!", 200, 300);
   }

  drawSprites();
}

