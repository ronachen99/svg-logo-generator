const Logo = require('../generateLogo');
const { Circle } = require('../shapes');

//==========================================================================================================================================//
//--------------------------------Would pass test if expected result equals to what's inside the .toEqual()---------------------------------//
describe('Logo', () => {
    it('should return a template literal SVG code', () => {
        const circle = new Circle();
        const logo = new Logo('ABC', 'white', circle);
        circle.setColour('black');
        expect(logo.renderSVG()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="black" />
<text x="150" y="100" font-weight="bold" font-size="50" text-anchor="middle" fill="white" dy="0.35em">ABC</text>
</svg>`)
    });
});
