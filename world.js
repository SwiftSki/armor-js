class World {
	constructor(options){
		this.gravity = {x: 0, y: 1};
		this.bounds = {
			min: {x: -Infinity, y: -Infinity},
			max: {x: Infinity, y: Infinity}
		};
		this.entities = [];
		
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
	
	add(objects){
		this.entities.push(objects);
		this.entities = this.entities.flat();
	}
}
