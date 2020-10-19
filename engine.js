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
        
        //air resistance (probably not the right math)
        obj.force.y -= ((world.airResistance + 1) * obj.velocity.y) - obj.mass;
        
        //normal force (gotta figure out hitboxes)

        //world limits (should remove object)
        if(obj.x > this.world.bounds.max.x) {
          this.world.remove(obj);
        } else {
          if(obj.x < this.world.bounds.min.x) {
            this.world.remove(obj);
          }
        }

        //move stuff
        
      }
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
