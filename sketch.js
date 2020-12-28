const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var engine, world, mConstraint, canvasmouse;
function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;
    let canvasmouse= Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse
    }
    mConstraint=MouseConstraint.create(engine, options);
    World.add(world, mConstraint)
    bob1=new pendulum(windowWidth/2-200, windowHeight/2-50, red)
}
function draw(){
    background("white")
    bob1.display();
}