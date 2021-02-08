const Engin=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var ground,dustbin,paper;


function preLoad(){


}

function setup(){
    createCanvas(1600,700);

    engine=Engine.create();
    world=engine.world;

    ground= new Ground(width/2,670,width,20);
    dustbin=new Dustbin(1200,650);
    paper=new Paper(200,450,70);

}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    ground.display();
    dustbin.display();
    paper.display();

    drawSprites();




}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

  
    }
}

