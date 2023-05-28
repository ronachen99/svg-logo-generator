const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes');
const Logo = require('./lib/generateLogo')

const getUserInput = async () => {
    try {
        const data = await inquirer.prompt(questions);

        if (data.text.length > 3 || data.text.length === 0) {
           return console.log('Logo text should be more than 0 and less than 3 characters in length.');
        } 
        
        const logoShape = setShape(data.shape);
        logoShape.setColour(data.shapeColour);
        const logo = new Logo(data.text, data.textColour, logoShape);

        await fs.promises.writeFile('examples/logo.svg', logo.renderSVG());
        console.log('Successfully generated a logo.svg in the examples folder.');
    } catch (error) {
        console.log(error)
    }
}

function setShape(shape) {
    switch (shape) {
        case 'Circle':
            return new Circle();
        case 'Square':
            return new Square();
        case 'Triangle':
            return new Triangle();
    }
}

getUserInput();