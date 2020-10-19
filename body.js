class Body {
  constructor(type, width, height, xPos, yPos, options){
    this.type = type;
    this.x = xPos;
    this.y = yPos;
    this.width = width;
    this.height = height;
    this.isStatic = false; //option
    this.label = type; //option
    this.fill = false //option
    this.thickness = 3 //option
    this.angle = 0;
    this.velocity = {x: 0, y: 0};
    this.force = {x: 0, y: 0};
    this.friction = 0.2; //option
    this.mass = 1; //option
    this.id = -1;

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
}
