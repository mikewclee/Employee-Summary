const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function employeeInformation() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of employee?",
            name: "name",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Show Summary"
            ]
        },
    ]).then(response => {
        if (response.name === "Manager") {
            managerInformation();
        } else if (response.name === "Engineer") {
            engineerInformation();
        } else if (response.name === "Intern") {
            internInformation();
        } else if (response.name === "Show Summary") {
            generateHTML(outputPath, render(team));
        };
    });
};

function managerInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "number"
        },
    ]).then(function (answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.number);
        team.push(manager);
        console.log(`Manager is : ${manager.name}`);
        employeeInformation();
    })
};

function engineerInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "github"
        }
    ]).then(function (answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.GitHub)
        team.push(engineer);
        console.log(`Engineer is : ${engineer}`);
        employeeInformation()
    })
};

function internInformation() {
    return inquirer.prompt([
        {
            type: "input",
            message: "what is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's ID",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school",
            name: "school",
        },
    ]).then(function (answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        team.push(intern);
        console.log(`intern is : ${intern}`);
        employeeInformation()
    })
};

//file generateHTML(outputPath, render(team));

employeeInformation();