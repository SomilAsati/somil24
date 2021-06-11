class Iron{
	constructor(x,y)
	{

	var options={
		'restitution':0.8,
		'friction':3,
		'density':30
	}
		
    this.body=Bodies.rectngle(x,y,50,50, options);
    this.width = 80;
    this.height = 50;
    
    World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x,pos.y);
			rectMode(CENTER)
			rotate(angle);
			stroke("black");
			fill("brown");
			
            rect(0,0,this.width,this.height)
			pop();
	}

}