//==========================================================================================================================================//
//--------------------------------------------------------Import Modules and Packages-------------------------------------------------------//
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const ChalkPipe = require('inquirer-chalk-pipe');
inquirer.registerPrompt('chalk-pipe', ChalkPipe);
const fs = require('fs');
const questions = require('./lib/questions');
const { Circle, Square, Triangle } = require('./lib/shapes');
const Logo = require('./lib/generateLogo');

//==========================================================================================================================================//
//--------------------------------------------------Get User Input: set values for the logo-------------------------------------------------//
const getUserInput = async () => {
    try {
        const data = await inquirer.prompt(questions);
        const logoShape = setShape(data.shape);
        logoShape.setColour(data.shapeColour);
        const logo = new Logo(data.text, data.textColour, logoShape);

        await fs.promises.writeFile('examples/logo.svg', logo.renderSVG());
        console.log('Successfully generated a logo.svg in the examples folder.');
    } catch (error) {
        console.log(error.message);
    }
}

//==========================================================================================================================================//
//----------------------------------------Set Shape: change the shape of the logo based on user input---------------------------------------//
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