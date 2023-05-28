var validateColor = require("validate-color").default;

class Shapes {
    constructor() {
        this.colour;
    }

    setColour(colour) {
        validateColor(colour) ? this.colour = colour : console.log("INVALID COLOUR");
    }
}

class Circle extends Shapes {
    constructor() {
        super()
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.colour}" />`
    }
}
class Square extends Shapes {
    constructor() {
        super()
    }
    render() {
        return `<rect x="100" y="100" width="100" height="100" fill="${this.colour}" />`
    }
}

class Triangle extends Shapes {
    constructor() {
        super()
    }
    render() {
        return `<polygon points="150,50 250,250 50,250" fill="${this.colour}" />`
    }
}

module.exports = { Circle, Square, Triangle }