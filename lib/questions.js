//==========================================================================================================================================//
//----------------------------------------------------Import Module for Colour Validation---------------------------------------------------//
const validateColor = require("validate-color").default;

//==========================================================================================================================================//
//------------------------------------------Questions: array that will be prompted for users input------------------------------------------//
const questions = [
    {
        type: 'maxlength-input',
        message: 'What text do you want to include in your logo? Enter up to three characters.',
        // Allow users to enter up to 3 characters in length
        maxLength: 3,
        // Set logo text to default if user enters nothing
        default: 'SVG',
        name: 'text',
    },
    {
        type: 'chalk-pipe',
        message: 'What colour do you want your text to be? Enter a color keyword OR a hexadecimal number.',
        // Set colour to default if user enters nothing
        default: '#6152bd',
        name: 'textColour',
        validate: function (userInput) {
            if (validateColor(userInput)) {
                return true
            } else {
                return "Please enter a valid colour."
            }
        }
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'chalk-pipe',
        message: 'What colour do you want your shape to be? Enter a color keyword OR a hexadecimal number.',
        // Set colour to default if user enters nothing
        default: 'Gray',
        name: 'shapeColour',
        validate: function (userInput) {
            if (validateColor(userInput)) {
                return true
            } else {
                return "Please enter a valid colour."
            }
        }
    }
]

//==========================================================================================================================================//
//-----------------------------------------Export the questions array to make it available elsewhere----------------------------------------//
module.exports = questions