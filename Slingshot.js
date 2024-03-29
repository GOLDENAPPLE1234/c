class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
attach(body){
    this.sling.bodyA = body
};
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,30);
        image(this.sling2,175,30);
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x < 220){
                
            strokeWeight(4);
           line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
           line(pointA.x - 25, pointA.y, pointB.x + 35, pointB.y);
           image(this.sling3,pointA.x - 35, pointA.y - 10,15,30);
             } else{
                strokeWeight(4);
                line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 35, pointB.y);
                image(this.sling3,pointA.x + 25, pointA.y - 10,15,30); 
             }
             
                         pop();
        }
    }
    
}