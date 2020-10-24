class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 20);
        this.radius = 20;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("purple");
        ellipse(0, 0, this.radius);
        pop();
    }
    };