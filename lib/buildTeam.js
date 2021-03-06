const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const card = require("./generateCard");
const html = require("./generateHTML");
const fs = require("fs");

let manager = "";
let team_cards = "";

const chooseTeamMembers = () => {
   return  inquirer.prompt([{
        type: "list",
        name: "team",
        choices: ["Engineer", "Intern", "Done"],
        message: "Please select which type of team member you would like to hire"
    }]);
}
const buildTeam = () =>{
    console.log("Please build out your team");
   inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your Manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Manager's email?"
    
    }, 
    {
        type: "input",
        name: "office_number",
        message: "What is your Manager's office number?"
    }
    
    ]).then((data) => {
       manager = new Manager(data.name, data.id, data.email, data.office_number);
       //build manager card here
       let manager_card = card.generateManagerCard(manager);
       team_cards += manager_card;
       hireTeamMembers();
    });
}

const hireTeamMembers = () => {
    chooseTeamMembers().then(data => {
           
        //maybe try switching to a switch statement with choices = data.choices
            if(data.team === "Engineer"){
               inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is your Engineer's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your Engineer's id?"

                },
                {
                    type: "input",
                    name: "email",
                    message:"What is your Engineer's email?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is your Engineer's Github?"
                }
                ]).then(data => {
                    let engineer = new Engineer(data.name, data.id, data.email, data.github);
                    let eng_card = card.generateEngineerCard(engineer);
                    team_cards += eng_card;
                    
                    //build card here with data for engineers maybe(then you wouldnt need array) something to think about
                    hireTeamMembers();
                });
            }

            if(data.team === "Intern"){
                inquirer.prompt([{
                    type: "input",
                    name: "name",
                    message: "What is your Intern's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your Intern's id?"

                },
                {
                    type: "input",
                    name: "email",
                    message:"What is your Intern's email?"
                },
                {
                    type: "input",
                    name: "school",
                    message: "What is your Intern's School?"
                }
                ]).then(data => {
                    let intern = new Intern(data.name, data.id, data.email, data.school);
                    let intern_card = card.generateInternCard(intern);
                    team_cards += intern_card;
                  
                    //build card here with data for intern maybe(then you wouldnt need array) something to think about
                    hireTeamMembers();
                });
            }

            if(data.team === "Done"){
            //this is where you should build out the html template for everything
            let team_html = html.generateHTML(team_cards);
            fs.writeFile("./output/team.html", team_html, (err) => {
                if(err) throw err;
                console.log("File written");
            })

            return;
            }
       });
}

module.exports = {buildTeam: buildTeam};


