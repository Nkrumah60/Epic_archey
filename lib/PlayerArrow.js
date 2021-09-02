class PlayerArrow {
    constructor(x, y, width, height,angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: false
      };
      this.width = width;
      this.height = height;
      this.angle = angle
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);

      var option = {
        isStatic:false
        }
        
        this.body = Bodies.circle(x,y,5,option);
        World.add(world,this.body);
        
    }

    shoot(){
        var velocity = p5.Vector.fromAngle(playerArcher.angle+ PI / 2);
        velocity.mult(25);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
    }

   display() {
    var Angle;
    if (this.body.velocity.y === 0) {
      Angle = this.archerAngle + PI / 2;
    } else {
      Angle = Math.atan(this.body.velocity.y / this.body.velocity.x);
    }

    Matter.Body.setAngle(this.body, Angle);

      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      if(this.body.position.x>200 && this.body.velocity.x>0){
        
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position);

        
    }
    for(var i= 0;i<this.trajectory.length;i++){
        
        ellipse(this.trajectory[i][0],this.trajectory[i][1],5,5);
       
        }
        
        
        
        }
    }
  