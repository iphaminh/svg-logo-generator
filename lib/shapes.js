class Shape { //creating class
    constructor(color) {
        this.color = color;
    }

    setColor(color) { // color for its class
        this.color = color
    }
}

//now link Circle, Square, Triangle class to Shape class
class Circle extends Shape { 
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" fill="${this.color}" />`; 
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };

