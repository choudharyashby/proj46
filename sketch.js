var fighterplane; 
var space; 
var meteoriteGroup,meteoriteImg; 
var bulletGroup,bulletImg;

var score = 0;

function preload () {
  fighterImg = loadImage("fighterplane.png");
  spaceImg = loadImage("space.jpg");
  meteoriteImg = loadImage("meteorite.png");
  bulletImg = loadImage("bullet.png");
  
}

function setup() {
  
  createCanvas(1000,600);
  
  space = createSprite (400,10,100,20);
  space.addImage(spaceImg);
  space.y = height/2;
  space.scale = 1.9;  

  fighterplane = createSprite(500, 500, 50, 50);
  fighterplane.addImage(fighterImg)
  fighterplane.scale = 0.3;
  

  invisibleGround = createSprite(400,310,1600,10);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(10,310,10,1600);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(990,310,10,1600);
  invisibleGround3.visible = false;



  

  meteoriteGroup = new Group();
  bulletGroup = new Group();

  score = 0

}

function draw() {
  background(255,255,255);  


  space.velocityY=-10

  if(space.y<250)
  {
    space.y=400

   }

   if(keyDown("space")){
    spawnbullet();
}
  if(keyDown("left_arrow")){
    fighterplane.velocityX = -5;
  }

  if(keyDown("right_arrow")){
    fighterplane.velocityX = 5;
  }

     

  if(meteoriteGroup.isTouching(bulletGroup)){
    meteoriteGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 5;


  }
  
  spawnmeteorite();

   fighterplane.collide(invisibleGround);
   fighterplane.collide(invisibleGround2);
   fighterplane.collide(invisibleGround3);


   
   drawSprites();

    textSize(20);
    stroke(3);
    fill("orange")
    text("meteorite"+ score, 270,50);
  
    
  }

  function spawnmeteorite () {
    if(frameCount% 200 === 0){
      var meteorite = createSprite(200,100,40,40);
      meteorite.addImage(meteoriteImg);
      meteorite.x = Math.round(random(100,1000))

      meteorite.velocityY = 3
      meteorite.scale = 0.15;      
  
      meteorite.lifetime = 200;
      meteoriteGroup.add(meteorite);
      

   
    }
  }

  function spawnbullet () {
      var bullet= createSprite(200,450,40,40)
      bullet.addImage(bulletImg);
      bullet.velocityY = -3
      bullet.scale = 0.15;      
      bullet.x=fighterplane.x;
      bullet.lifetime = 200;
      bulletGroup.add(bullet);
      

   
    }
  

