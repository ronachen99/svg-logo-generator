const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should return a template literal SVG code of a circle with the colour red', () => {
        const circle = new Circle();
        circle.setColour('red');
        expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="50" fill="red" />`)
    });
});

describe('Square', () => {
    it('should return a template literal SVG code of a square with the colour blue', () => {
        const square = new Square();
        square.setColour('blue');
        expect(square.render()).toEqual(`<rect x="60" y="60" width="80" height="80" fill="blue" />`)
    });
});

describe('Triangle', () => {
    it('should return a template literal SVG code of a triangle with the colour green', () => {
        const triangle = new Triangle();
        triangle.setColour('green');
        expect(triangle.render()).toEqual(`<polygon points="100,40 160,160 40,160" fill="green" />`)
    });
});