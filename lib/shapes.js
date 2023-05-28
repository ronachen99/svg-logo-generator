class Shapes {
    constructor() {
        this.colour = '';
    }

    setColour(colour) {
        this.colour = colour;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.colour}" />`
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="60" y="60" width="80" height="80" fill="${this.colour}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="100,40 160,160 40,160" fill="${this.colour}" />`
    }
}

module.exports = { Circle, Square, Triangle }