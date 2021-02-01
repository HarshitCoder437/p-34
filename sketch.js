const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var monster;
var superhero;
var ground;
var hero;
var fly;
var block1, block2, block3, block4, block5, block6, block7; 
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25, block26;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600,565,40,40);
  block2 = new Block(600,525,40,40);
  block3 = new Block(600,485,40,40);
  block4 = new Block(600,445,40,40);
  block5 = new Block(600,405,40,40);
  block6 = new Block(600,365,40,40);
  block7 = new Block(600,325,40,40);
  block8 = new Block(660,565,40,40);
  block9 = new Block(660,525,40,40);
  block10 = new Block(660,485,40,40);
  block11 = new Block(660,445,40,40);
  block12 = new Block(660,405,40,40);
  block13 = new Block(660,365,40,40);
  block14 = new Block(720,565,40,40);
  block15 = new Block(720,525,40,40);
  block16 = new Block(720,485,40,40);
  block17 = new Block(720,445,40,40);
  block18 = new Block(720,405,40,40);
  block19 = new Block(720,365,40,40);
  block20 = new Block(720,325,40,40);
  block21 = new Block(720,285,40,40);
  // block22 = new Block(200,200,20,20);
  // block23 = new Block(200,200,20,20);
  // block24 = new Block(200,200,20,20);
  // block25 = new Block(200,200,20,20);
  // block26 = new Block(200,200,20,20);

  ground = new Ground(1500,600,3000,30);
  hero = new Hero(300,450);
  fly = new Fly(hero.body, {x: 250, y: 40});
}

function draw() {
  background(bg);

  ground.display();
  hero.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  // block22.display();
  // block23.display();
  // block24.display();
  // block25.display();
  // block26.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}