var dog, happyDog, dogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
	
}

function setup() {
  createCanvas(500, 500);

  
  dog = createSprite(250,300,30,30);
  dog.scale = 0.25;
  dog.addImage(dogImg);

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 150,50);
  textSize(45);
  fill("white");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref("/").update({
    Food:x
  })
}



