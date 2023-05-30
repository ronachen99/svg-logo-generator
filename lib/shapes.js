//==========================================================================================================================================//
//------------------------------------------------------Class Shapes: the parent class------------------------------------------------------//
class Shapes {
    constructor() {
    }
    setColour(colour) {
        this.colour = colour;
    }
}

//==========================================================================================================================================//
//---------------Class Circle, Square, and Triangle: the children that inherits the properties and methods of the parent class--------------//
class Circle extends Shapes {
    constructor() {
        super()
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.colour}" />`
    }
}
class Square extends Shapes {
    constructor() {
        super()
    }
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.colour}" />`
    }
}

class Triangle extends Shapes {
    constructor() {
        super()
    }
    render() {
        return `<polygon points="150,0 300,300 0,300" fill="${this.colour}" />`
    }
}

//==========================================================================================================================================//
//---------------------------------------Export the children classes to make them available elsewhere---------------------------------------//
module.exports = { Circle, Square, Triangle }