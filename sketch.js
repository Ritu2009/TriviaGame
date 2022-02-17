const Engine = Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;


var bg, pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8;
var  pl1img, pl2img, pl3img, pl4img, pl5img, pl6img, pl7img, pl8img;
var character, characterImg;
var planetState = 0;
var bg1;

function preload() {
  bg = loadImage("assets/background.png");
  pl1img = loadImage("assets/pl.png");
  pl2img = loadImage("assets/pl2.png");
  pl3img = loadImage("assets/pl3.png");
  pl4img = loadImage("assets/pl4.png");
  pl5img = loadImage("assets/pl5.png");
  pl6img = loadImage("assets/pl6.png");
  pl7img = loadImage("assets/pl7.png");
  pl8img = loadImage("assets/pl8.png");
  characterImg = loadImage("assets/CharacBoy.png");
  bg1=loadImage("assets/bg1.jpg")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  pl1 = createSprite(width/3-250, height/3-100);
  pl1.addImage(pl1img);
  pl1.scale = 0.6;

  pl2 = createSprite(width/3-100, height/2+80);
  pl2.addImage(pl2img);
  pl2.scale = 0.6;

  pl3 = createSprite(width/3+50, height/3-100);
  pl3.addImage(pl3img);
  pl3.scale = 0.28;

  pl4 = createSprite(width/2, height/2+80);
  pl4.addImage(pl4img);
  pl4.scale = 0.6;

  pl5 = createSprite(width/2+150, height/3-100);
  pl5.addImage(pl5img);
  pl5.scale = 0.6;

  pl6 = createSprite(width/2+300, height/2+80);
  pl6.addImage(pl6img);
  pl6.scale = 0.8;

  pl7 = createSprite(width/2+450, height/3-100);
  pl7.addImage(pl7img);
  pl7.scale = 1.1;

  pl8 = createSprite(width/2+600, height/2+80);
  pl8.addImage(pl8img);
  pl8.scale = 1.3;
  
  character=createSprite(100, height/2+200);
  character.addImage(characterImg);
  character.scale=0.3;
 
}
function hide(){
pl1.visible=false;
pl2.visible=false;
pl3.visible=false;
pl4.visible=false;
pl5.visible=false;
pl6.visible=false;
pl7.visible=false;
pl8.visible=false;
character.visible=false;  
}

function draw() {
  if(planetState===0){
    background(bg);
    drawSprites();
  }
  
  if(character.isTouching(pl1)){
    setInterval(()=>{planetState=1;
      console.log(planetState);}, 3000)
  }
  if(planetState==1){
    hide();
    background(bg1);
    textSize(30);
    fill("white");
    text("Question 1", width/2, height/2);
  }
  
 
}

function mouseClicked(){
  if(planetState===0){
    character.x=width/3-300;
    character.y=height/3-100;
  }

}