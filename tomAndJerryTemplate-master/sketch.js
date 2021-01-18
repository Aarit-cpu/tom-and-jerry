
function preload() {
   
gardenImg = loadImage("garden.png")
jerry = loadAnimation("jerry1.png","jerry2.png","jerry3.png","jerry4.png")

cat = loadAnimation("tom1.png","tom2.png","tome3.png","tom4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    var jerry = createSprite(350,81,10,20)
    jerry.addAnimation(jerry)
    jerry.scale = 0.1



    var cat  = createSprite(346,304,10,20)
     cat.addAnimation(tom)
     cat.scale = 0.1
     



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide 


    if(keyDown(l"left_arrow")){
        cat.x = cat.x -5
    }

    drawSprites();
}


function keyPressed(){

   if (cat.x - mouse.x < (cat.width - mouse.width)/2)
   {
     //For moving and changing animation write code here  
   }

    cat.addAnimation("catlastImage",catImg3)
    cat.changeAnimation("catLastImage")


}
