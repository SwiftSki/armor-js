class Body {
    constructor(type, width, height, xPos, yPos, options) {
        this.label = type; //option
        this.type = type;
        this.x = xPos;
        this.y = yPos;
        this.width = width;
        this.height = height;
        this.isStatic = false; //option
        this.fill = ''; //option
        this.thickness = 1; //option
        this.angle = 0;
        this.velocity = { x: 0, y: 0 };
        this.force = { x: 0, y: 0 };
        this.friction = 0.2; //option
        this.mass = 1; //option
        this.id = -1;
        this.points = [];
        this.hitbox = [];
        //radius of hitbox circles
        this.r; //option

        let randColor = () => {
            let color = '#';
            for (let i = 0; i < 6; i++) {
                let num = Math.floor(Math.random() * 16);
                num = num.toString(16);
                color += num;
            }
            return color;
        }

        if (this.fill == '') this.fill = randColor();

        //set points
        if (type == 'circle') {
            this.points.push({ x: xPos, y: yPos });
        } else if (type == 'rect') {
            this.points.push({ x: xPos - width / 2, y: yPos - height / 2 });
            this.points.push({ x: xPos + width / 2, y: yPos - height / 2 });
            this.points.push({ x: xPos + width / 2, y: yPos + height / 2 });
            this.points.push({ x: xPos - width / 2, y: yPos + height / 2 });
        }


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