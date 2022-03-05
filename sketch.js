var airplane, airplaneImg;
var background, backgroundImg;
var cargoBox, cargoBoxImg;
var cargoBoxes, cargoBoxesImg
var geese, geeseImg;
var backgroundImg;
var gameState = "wait";
var button, buttonImg
function preload(){
  airplaneImg = loadImage("airplane.png");
  cargoBoxImg = loadImage("cargoBox.png")
  //cargoBoxesImg = loadImage("cargoBoxes.png")
  geeseImg = loadImage("geese.png")
  buttonImg = loadImage("playButton.jpg")
  backgroundImg = loadImage("background.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
airplane = createSprite(105,380)
 airplane.addImage(airplaneImg);
 airplane.scale = 0.2;
airplane.visible = false;

 geese = createSprite(351,145);
 geese.addImage(geeseImg);
geese.scale = 0.04;
geese.visible = false;

  cargoBox = createSprite(500,145);
  cargoBox.addImage(cargoBoxImg);
  cargoBox.scale = 0.04;
cargoBox.visible = false;
  //cargoBoxes = createSprite(40,272);
  //cargoBoxes.addImage(cargoBoxesImg);
  //cargoBoxes.scale = 0.4;
  button = createSprite(width/2-100,height/2,100,100);
  button.addImage(buttonImg);
  button.scale = 0.22;
}

function draw(){
 background(backgroundImg);
if(mousePressedOver(button) && gameState ==="wait"){
gameState = "play"
}
if(gameState ==="play"){
  button.visible = false;
  airplane.visible = true;
  geese.visible = true;
  cargoBox.visible = true;
}
drawSprites();
}
