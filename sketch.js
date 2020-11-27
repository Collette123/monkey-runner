var monkey,monkey_running
var ground,groundImage
var banana,bananaImage
var obstacle,obstacleImage
var FoodGroup,obstacleGroup
var score

function preload(){
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,10,10);  
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
}

function draw() {
  background("white");
  
  ground.x = ground.width/2;
  
  //jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //stop monkey from falling down
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount%80 === 0){
    var banana = createSprite(200,-200,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 500;
    banana.y = Math.round(random(120,200));
  }
}

function obstacles(){
  if(frameCount%300 === 0){ 
    var obstacle = createSprite(200,200,10,10);
    obstacle.addImage(obstacleImage); 
    obstacle.velocityX = -5
  }
}