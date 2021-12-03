class Dustbin {
    constructor(){
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.wallthickness = 10;

        var options = {
            isStatic: true 
        }

        this.bottomBody = Bodies.rectangle(this.x, this.y ,this.width, this.height, this.wallthickness, options);
        this.leftBody = Bodies.rectangle(this.x-this.width/2, this.y - this.height/2, this.wallthickness,this.height,options);
        this.rightBody = Bodies.rectangle(this.x+this.width/2, this.y - this.height/2, this.wallthickness,this.height,options);

        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);

    }

    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.LeftBody.position;
        var posRight = this.RightBody.position;



    }
}