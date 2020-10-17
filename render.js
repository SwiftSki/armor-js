class Render {
	constructor(canvasID, options){
		this.canvas = document.getElementById(canvasID);
		
		
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
	start(){ //starts engine ticking and rendering
		this.runner = requestAnimationFrame(() => {
			//prolly add objects to be rendered in here
		});
	}
	stop(){
		cancelAnimationFrame(this.runner);
	}
}
