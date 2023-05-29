const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should return a template literal SVG code of a circle with the colour red', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red" />`)
    });
});

describe('Square', () => {
    it('should return a template literal SVG code of a square with the colour blue', () => {
        const square = new Square('blue');
        expect(square.render()).toEqual(`<rect x="50" height="200" width="200" fill="blue" />`)
    });
});

describe('Triangle', () => {
    it('should return a template literal SVG code of a triangle with the colour green', () => {
        const triangle = new Triangle('green');
        expect(triangle.render()).toEqual(`<polygon points="150,0 300,300 0,300" fill="green" />`)
    });
});