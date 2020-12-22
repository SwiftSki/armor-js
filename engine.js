class Engine {
	constructor(World, Render, options){
    this.world = World;
    this.render = Render;

    //this takes the options and applies them if needed
		let prop;
		for (prop in this) {
			if (Object.prototype.hasOwnProperty.call(this, prop)) {
				this[prop] = this[prop];
			}
		}
		for (prop in options) {
			if (Object.prototype.hasOwnProperty.call(options, prop)) {
				this[prop] = options[prop];
			}
		}
  }
  tick(callback){ //moves the engine and renderer forward
    this.render.draw();
    this.world.entities.map(obj => {
      if(!obj.isStatic){
        //gravity
        obj.force.y += 10;
        
        //air resistance
        /*if(obj.velocity.y > 0) obj.force.y -= (world.airResistance * (obj.velocity.y ** 2)) / 10;
        else obj.force.y += (world.airResistance * (obj.velocity.y ** 2)) / 10;

        if(obj.velocity.x > 0) obj.force.x -= (world.airResistance * (obj.velocity.x ** 2)) / 10;
        else obj.force.x += (world.airResistance * (obj.velocity.x ** 2)) / 10;*/
        
        //normal force
        /*
        let objX = []; //obj max and min points
        let objY = []; 
        this.world.entities.map(current => {
          { //y
            if(){}
          }
        });
        */
        //bunch of circles


        //world limits (should remove object)
        if(obj.x > this.world.bounds.max.x) {
          this.world.remove(obj);
        } else {
          if(obj.x < this.world.bounds.min.x) {
            this.world.remove(obj);
          }
        }
      }
      //movement
      obj.velocity.x += obj.force.x;
      obj.velocity.y += obj.force.y;
      obj.x += obj.velocity.x / 10;
      obj.y += obj.velocity.y / 10;

      obj.points.map(current => {
        current.x += obj.velocity.x / 10;
        current.y += obj.velocity.y / 10;
      });
    });

    if({}.toString.call(callback) === '[object Function]'){callback();}
  }
  start(ms, callback){ //starts engine ticking and rendering
    let loop = () => {
      this.tick(callback);
    }
    this.runner = setInterval(loop, ms);
  }
	stop(){
    clearInterval(this.runner);
	}
}