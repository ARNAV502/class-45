var layer1,layer2,layer3,layer4
var layer1Img,layer2Img,layer3Img,layer4Img,
    layer5Img,layer6Img,layer7Img,layer8Img,layer8Img;
var bg1,bg1Img;

var playb,playbImg;
var plr,plrImg;
var sceretbook,sceretbookImg
var light,lightImg;
var score = 0

var enemy,enemyImage,enemy2,enemy2Image;
var enemyGroup,enemy2Group;
var ground;
var gameState = "play"
var ZombieIMG, ZombieCreatIMG, Zombie;
function preload(){
  layer1Img = loadImage("Layer1.png")
  layer2Img = loadImage("Layer2.png")
  layer3Img = loadImage("Layer3.png")
  layer4Img = loadImage("Layer4.png")
 // layer5Img = loadImage("Layer5.png")
  layer6Img = loadImage("Layer6.png")
  layer7Img = loadImage("Layer7.png")
  layer8Img = loadImage("Layer8.png")
  layer9Img = loadImage("layer9.png")
  // ZombieIMG = loadImage("Alien_1_Walking.gif")
  // ZombieCreatIMG = createImage("Alien_1_Walking.gif")
  plrImg = loadAnimation("0.png","1.png", "2.png", "3.png","4.png", "5.png", "6.png", "7.png")
  
  BGSound = loadSound("rainforest-sounds.mp3")
  
  enemyImage = loadImage("EnemyBird.png");
  enemy2Image = loadAnimation("Alien_1_Walking0001.png", "Alien_1_Walking0002.png", "Alien_1_Walking0003.png","Alien_1_Walking0004.png", "Alien_1_Walking0005.png", "Alien_1_Walking0006.png", "Alien_1_Walking0007.png", "Alien_1_Walking0008.png", "Alien_1_Walking0009.png", "Alien_1_Walking0010.png", "Alien_1_Walking0011.png", "Alien_1_Walking0012.png", );
}

function setup(){

 // BGSound.play()
  camera.on()
  layer1 = createSprite(250,1)
  layer1.addImage(layer1Img)
  //layer1.velocityX = -0.6
  layer2 = createSprite(250,1)
  layer2.addImage(layer2Img)
 // layer2.velocityX = -1
  console.log(score)
  layer3 = createSprite(250,1)
  layer3.addImage(layer3Img)
 // layer3.velocityX = -2
  layer4 = createSprite(250,1)
  layer4.addImage(layer4Img)
  //layer4.velocityX = -3
  
  // layer5 = createSprite(250,1)
  // layer5.addImage(layer5Img)
  // layer5.velocityX = -3.5
  
  layer6 = createSprite(0,0)
  layer6.addImage(layer6Img)
  //layer6.velocityX = -3.5
  
  layer7 = createSprite(250,0)
  layer7.addImage(layer7Img)
  //layer7.velocityX = -3.5
  
  layer8 = createSprite(250,0)
  layer8.addImage(layer8Img)
  //layer8.velocityX = -3.5
  
  layer9 = createSprite(250,0)
  layer9.addImage(layer9Img)
  //layer9.velocityX = -3.5
  
  
  plr = createSprite(275,300)
  plr.scale = 2
  plr.addAnimation("player",plrImg)

  
  score = 0;
  ground = createSprite (600,350,1200,20) 
  enemyGroup = new Group();
  enemy2Group = new Group();
  ground.visible = false; 
}

function draw(){
  background(0)
   camera.x=plr.x;
  camera.y=plr.y-150; 
  
  if (keyDown("left")) {
    plr.x = plr.x-5;
    plr.mirrorX(-1);    
  }

  if (keyDown("right")) {
    plr.x = plr.x+5;

  }


  if(gameState == "play"){
   
score = score + Math.round(getFrameRate()/60);
  
  textSize(20);
   text("Score: "+ score, 400,50);
  
 // spawnEnemy()
  spawnEnemy2()
    
  }
  
  drawSprites()

 
//  if(layer1.x<50){
//    layer1.x = 200
//  }
  
   
//  if(layer2.x<30){
//    layer2.x = 200
//  }
  
   
//  if(layer3.x<30){
//    layer4.x = 200
//  }
   

//    if(layer6.x<30){
//    layer6.x = 200
//  }
//    if(layer7.x<30){
//    layer7.x = 200
//  }
//    if(layer8.x<30){
//    layer8.x = 200
//  }
  
//      if(layer9.x<30){
//    layer9.x = 200
//  }
     if(keyDown("space")&& plr.y >= 306 ){
      plr.velocityY = -12
     }

plr.velocityY += 0.7 
console.log(plr.y)
plr.collide(ground)
if(plr.isTouching(enemy2Group)){
plr.destroy()
layer1.velocityX = 0 
layer2.velocityX = 0 
layer3.velocityX = 0 
layer4.velocityX = 0 
}


if(plr.x-ground.x>200) ground.x=plr.x+200;
  if(ground.x-plr.x>200) ground.x=plr.x-200;


if(plr.x-layer1.x>200) layer1.x=plr.x+200;
  if(layer1.x-plr.x>200) layer1.x=plr.x-200;
  

  
if(plr.x-layer2.x>200) layer2.x=plr.x+200;
if(layer2.x-plr.x>200) layer2.x=plr.x-200;
  

if(plr.x-layer3.x>200) layer3.x=plr.x+200;
if(layer3.x-plr.x>200) layer3.x=plr.x-200;

if(plr.x-layer4.x>200) layer4.x=plr.x+200;
if(layer4.x-plr.x>200) layer4.x=plr.x-200;



if(plr.x-layer6.x>200) layer6.x=plr.x+200;
if(layer6.x-plr.x>200) layer6.x=plr.x-200;

if(plr.x-layer7.x>200) layer7.x=plr.x+200;
if(layer7.x-plr.x>200) layer7.x=plr.x-200;

if(plr.x-layer8.x>200) layer8.x=plr.x+200;
if(layer8.x-plr.x>200) layer8.x=plr.x-200;

if(plr.x-layer9.x>200) layer9.x=plr.x+200;
if(layer9.x-plr.x>200) layer9.x=plr.x-200;
}




function spawnEnemy() {
  //write code here to spawn the clouds
  if (frameCount % 180 === 0) {
    var enemy = createSprite(random(100,700),120,40,10);
    enemy.y = Math.round(random(80,120));
  //  enemy.addImage(ZombieCreatIMG);
    enemy.scale = 2;
    enemy.velocityX = -3;
    
    enemy.lifetime = 200;

  enemyGroup.add(enemy); 
  //enemyGroup.add(enemy2)
  }
  
}

function spawnEnemy2(){
   if (frameCount % 180 === 0) {
    var enemy2 = createSprite(600,300,40,20);
    enemy2.addAnimation("enemy",enemy2Image);
    enemy2.scale = 0.6;
    //enemy2.velocityX = -3;
 
    enemy2.lifetime = 200;

  enemy2Group.add(enemy2); 
  }
  
  
}


function shootArrow(){


}