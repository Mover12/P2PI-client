export default class Vector {
    x;y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    mult(v) {
        return new Vector(this.x * v.x, this.y * v.y);
    }
    div(v) {
        return new Vector(this.x / v.x, this.y / v.y);
    }
    stringify() {
        return `${this.x},${this.y}`
    }
}