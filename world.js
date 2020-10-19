class World {
	constructor(options){
		this.gravity = {x: 0, y: 1};
		this.bounds = {
			min: {x: -Infinity, y: -Infinity},
			max: {x: Infinity, y: Infinity}
		};
    this.airResistance = 0.5;
    this.entities = [];
    this.lastID = -1;
		
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
    if(objects[0] != undefined){ //array
      objects.map(obj => {
        this.lastID++;
        obj.id = this.lastID;
        this.entities.push(obj);
      });
    } else { //object
      this.lastID++;
      obj.id = this.lastID;
      this.entities.push(obj);
    }
	}
  remove(objects){
    if(objects[0] != undefined) { //array
      objects.map(obj => {
        console.log(this);
        this.entities.map(current => {
          if(obj.id == current.id) obj = '';
        });
      });
    } else { //object
      console.log('object mode');
      this.entities.map((current, index) => {
        if(objects.id == current.id) this.entities[index] = '';
      });
    }
    this.entities.sort();
    while(this.entities[0] == '') this.entities.shift();
  }

}
