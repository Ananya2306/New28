class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

  
    display(){
    	push();
    	if(this.sling.bodyA){
    		var pointA = this.sling.bodyA.position;
    	    var pointB = this.pointB;
    		strokeWeight(3);
    		stroke(0);
    		line(pointA.x, pointA.y, pointB.x, pointB.y);
    	}
    	pop();
    }
    
}