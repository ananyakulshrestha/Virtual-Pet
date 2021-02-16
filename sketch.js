//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/doglmg.png");
  dog2 = loadImage("images/doglmg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 450, 60,60);
  dog.image = addImage("images/doglmg.png");
  dog2.image = addImage("images/doglmg1.png");

  database = firebase.database()
   
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  textSize(35)
  fill("red")
  text("foodStock", 90,90);
  //add styles here
}

//function to read values from database
function readStock(data)
{
  foodS = data.val();
}

//function to write values in database
function writeStock(x)
{
  if(x <= 0)
  {
     x = 0;
  }
  else
  {
    x = x-1;
  }
  
  database.ref('/').update({
    Food:xs
  })
}


