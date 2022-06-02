const inquirer = require("inquirer");

const managerQuestions = [
    {
        type: "input",
        meassage: "Please enter the managers name.",
        name: "managerName"
    },
    {
        type: "input",
        meassage: "Please enter the managers employee ID.",
        name: "managerId"
    },
    {
        type: "input",
        meassage: "Please enter the managers email.",
        name: "managerEmail"
    },
    {
        type: "input",
        meassage: "Please enter the managers office number.",
        name: "office"
    },

]

const choiceQuestion = [
    {
        type: "list",
        meassage: "Please choose to add an engineer or an intern, or finish your team.",
        choices: ["Engineer", "Intern", "Finish"],
        name: "continue"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "Please input the engineer's name.",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Please input the engineer's employee ID.",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Please input the engineer's email.",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Please input the engineer's GitHub.",
        name: "github"
    },
]

const internQuestions = [
    {
        type: "input",
        message: "Please input the interns's name.",
        name: "internName"
    },
    {
        type: "input",
        message: "Please input the intern's employee ID.",
        name: "internId"
    },
    {
        type: "input",
        message: "Please input the engineer's email.",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Please input the intern's school.",
        name: "school"
    },
]


inquirer.prompt(managerQuestions)
    .then(response)