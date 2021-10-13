var trex ,trex_running;
var edges;
var ground, groundImage, invisibleGround;


function preload(){

  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){

  //crear el lienzo
  createCanvas(600,200)

  //Crea el sprite del Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  
  //Crear el suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
  
  //crear un sprite del suelo invisible
  invisibleGround = createSprite(200,190,400,20);
  invisibleGround.visible = false;
  
  //creando límites
  edges = createEdgeSprites();
  
}

function draw(){

  background("white");
  
  ground.velocityX = -5;
  
  //suelo infinito
  if(ground.x < 0){
  ground.x = ground.width / 2;
  }  
    
  //ingresa la posición de y del trex
  console.log(trex.y);
 
  
  //Para que salte el trex
  if(keyDown("space") && trex.y > 150){
    trex.velocityY=-10;
  }
  
  //crear la gravedad
  trex.velocityY = trex.velocityY + 0.8;
  
  
  //colisione con el borde
  trex.collide(invisibleGround);
  
  drawSprites();
  
}