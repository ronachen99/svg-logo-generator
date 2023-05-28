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
        return `<circle cx="150" cy="150" r="100" fill="${this.colour}" />`
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="100" y="100" width="100" height="100" fill="${this.colour}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,50 250,250 50,250" fill="${this.colour}" />`
    }
}

module.exports = { Circle, Square, Triangle }