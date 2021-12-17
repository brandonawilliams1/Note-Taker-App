// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is a brife description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "How do you use this repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "How should someone contribute to this repository?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "list",
        message: "What Licenses do your application use?",
        name: "license",
        choices: [
            "Apache 2.0",
            "GNU v3",
            "MIT",
            "BSD 3-Clause",
            "Mozilla Public License 2.0",
            "Unlicense",
            ]
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]

// generates a markdown file
function writeToFile(fileName, data) {
    const markdownStr = generateMarkdown(data)
    fs.writeFile(`${fileName}.md`, markdownStr, (err) =>
      err ? console.log(err) : console.log(`Success you've made a ${fileName}.md!`))
  }
  
  // Runs Inquirer 
  function init() {
    inquirer.prompt(questions)
      .then((answers) => writeToFile(answers.title, answers))
  }
  
//   Initialize the init function
  init();