const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var world, engine;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addImage("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	star_options = {isStatic: false}

	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);
	
}


function draw() {
  background(bgImg);

  Engine.update(engine);

  drawSprites();

}
