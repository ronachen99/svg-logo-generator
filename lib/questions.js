const questions = [
    {
        type: 'input',
        message: 'What text do you want to include in your logo? Enter up to three characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What colour do you want your text to be? Enter a color keyword OR a hexadecimal number (i.e.#ffffff).',
        name: 'textColour',
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What colour do you want your shape to be? Enter a color keyword OR a hexadecimal number (i.e.#ffffff).',
        name: 'shapeColour',
    }
]

module.exports = questions