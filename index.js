const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions')

inquirer.prompt(questions).then((data) => {
    fs.writeFile('logo.svg', generateLogo(data), (err) => 
        err ? console.log(err) : console.log('Generated logo.svg!')
    );
});