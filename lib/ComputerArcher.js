class ComputerArcher{

    constructor(x,y,width,height,angle){
    
        var options = {
            isStatic:true
            };
        
            this.body = Bodies.rectangle(x,y,width,height,options,angle)
            this.width = width;
            this.height = height;
            this.image= loadImage("./assets/computerArcher.png");
            this.angle = angle
        
            World.add(world,this.body);
        
    
    
    
    }
    
    display(){

        if (keyIsDown(RIGHT_ARROW) && this.angle <-1.20) {
            this.angle += 0.01
          }

          if (keyIsDown(LEFT_ARROW) && this.angle  >-2) {
            this.angle -= 0.01;
            
          }

        var pos = this.body.position;
       var angle = this.body.angle;
    
        push();
        translate(pos.x,pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
        noFill();
        pop();
    
      }
    
    
    }
