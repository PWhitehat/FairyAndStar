const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy, fairyBody, fairy_options, fairyVoice;
var star, starBody;
var world, engine;
var follow = 0;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addImage("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	fairy_options = {isStatic: true}
	fairyBody = Bodies.rectangle(500, 520, 350, 20, fairy_options);
	World.add(world, fairyBody);

	fairyVoice.play();

}

function makeStar() {

	star_options = {isStatic: false}
	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);

}

function keyPressed() {

	if (keyCode === 32) {

		makeStar();
		follow = 1;
	
	}

}

function draw() {
  background(bgImg);

  Engine.update(engine);


  //if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {



  //}

if (follow === 1) {

  star.x = starBody.position.x;
  star.y = starBody.position.y;  

}

  fairy.x = fairyBody.position.x;
  fairy.y = fairyBody.position.y;  

  drawSprites();

}
