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
        default: '#6152bd',
        name: 'textColour',
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
        default: 'Gray',
        name: 'shapeColour',
    }
]

//==========================================================================================================================================//
//-----------------------------------------Export the questions array to make it available elsewhere----------------------------------------//
module.exports = questions