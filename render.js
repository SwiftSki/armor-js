class Render {
	constructor(worldObject, canvasID, options){
		this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.world = worldObject;
    this.backgroundColor = '#000022';
    this.background = function(){};
		
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

  draw(){ //main draw loop
    let ctx = this.ctx;
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.background(); //the background drawer is now in index.html
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';

    this.world.entities.map((obj, index) => {
      ctx.save()
      ctx.lineWidth = obj.thickness
      switch(obj.type){
        case 'ellipse':
          ctx.beginPath();
          ctx.ellipse(obj.x, obj.y, obj.width / 2, obj.height / 2, 0, 0, 2 * Math.PI);
          break;
        case 'rect':
          ctx.rect(obj.x - obj.width / 2, obj.y - obj.height / 2, obj.width, obj.height);
          break;
          
        default:
          throw new TypeError('Unknown type "' + obj.type + '".')
      }
      if(obj.fill == true){
        ctx.fill()
      }
      else{
        ctx.stroke();
      }
      ctx.restore()
    });
    
  }
	
}
