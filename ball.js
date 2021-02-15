class Ball{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.1

        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display()
    {
        var ballpos=this.body.position;
        
        push()
        translate(ballpos.x,ballpos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop()
    }
}
