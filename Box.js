class Box{
constructor(x,y,width1,height1){
var options =
{
    restitution:1
}
this.body = Bodies.rectangle(x,y,width1,height1, options);
this.width = width1;
this.height = height1;
World.add(world,this.body);
} 

display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255)
    rect(0,0,this.width,this.height);
    pop();
}

}