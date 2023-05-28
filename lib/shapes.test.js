const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should return a template literal SVG code of a circle with the colour red', () => {
        const circle = new Circle();
        circle.setColour('red');
        expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="100" fill="red" />`)
    });
});

describe('Square', () => {
    it('should return a template literal SVG code of a square with the colour blue', () => {
        const square = new Square();
        square.setColour('blue');
        expect(square.render()).toEqual(`<rect x="100" y="100" width="100" height="100" fill="blue" />`)
    });
});

describe('Triangle', () => {
    it('should return a template literal SVG code of a triangle with the colour green', () => {
        const triangle = new Triangle();
        triangle.setColour('green');
        expect(triangle.render()).toEqual(`<polygon points="150,50 250,250 50,250" fill="green" />`)
    });
});