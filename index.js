const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let exit = false;

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the managers name.",
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter the managers employee ID.",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter the managers email.",
    },
    {
        type: "input",
        name: "office",
        message: "Please enter the managers office number.",
    },

]

const choiceQuestion = [
    {
        type: "list",
        message: "Please choose to add an engineer or an intern, or finish your team.",
        choices: ["Engineer", "Intern", "Finish"],
        name: "continue"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Please input the engineer's name.",
    },
    {
        type: "input",
        name: "engineerId",
        message: "Please input the engineer's employee ID.",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Please input the engineer's email.",
    },
    {
        type: "input",
        name: "github",
        message: "Please input the engineer's GitHub.",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Please input the interns's name.",
    },
    {
        type: "input",
        name: "internId",
        message: "Please input the intern's employee ID.",
    },
    {
        type: "input",
        name: "internEmail",
        message: "Please input the engineer's email.",
    },
    {
        type: "input",
        name: "school",
        message: "Please input the intern's school.",
    }
]

async function addManager() {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.office)
            fs.appendFile("./src/index.html", `<div class="card">
            <div class="card-content">
                <div class="media-content">
                    <p class="title is-4"> ${manager.name}</p>
                    <p class="subtitle is-6"> ${manager.email}</p>
                </div>
                <div class="content">
                    <ul>
                        <li>ID: ${manager.id}</li>
                        <li>Office Number: ${manager.office}</li>
                    </ul>
                </div>
            </div>
            </div>
        `, (err) =>
                err ? console.error(err) : console.log("README written succesfully")
            )
            addEmployee();
        })

}


async function addEmployee() {
    while (!exit) {

        await inquirer.prompt(choiceQuestion)
            .then((response) => {
                switch (response.continue) {
                    case "Engineer":
                        addEngineer()
                        break;
                    case "Intern":
                        addIntern()
                        break;
                    case "Finish":
                        exit = true
                }
            })
    }
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
            fs.appendFile("./src/index.html", `<div class="card">
            <div class="card-content">
                <div class="media-content">
                    <p class="title is-4"> ${engineer.name}</p>
                    <p class="subtitle is-6"> ${engineer.email}</p>
                </div>
                <div class="content">
                    <ul>
                        <li>ID: ${engineer.id}</li>
                        <li>Office Number: ${engineer.github}</li>
                    </ul>
                </div>
            </div>
            </div>`, (err) =>
                err ? console.error(err) : console.log("README written succesfully"))
        })
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school)
            htmlOutput += `<div class="card">
            <div class="card-content">
                <div class="media-content">
                    <p class="title is-4"> ${intern.name}</p>
                    <p class="subtitle is-6"> ${intern.email}</p>
                </div>
                <div class="content">
                    <ul>
                        <li>ID: ${intern.id}</li>
                        <li>Office Number: ${intern.github}</li>
                    </ul>
                </div>
            </div>
            </div>`
        })
}

function createCard() {

}

function finishTeam() {

}


addManager()