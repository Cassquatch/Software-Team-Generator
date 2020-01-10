const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

let manager = "";

//may not use these arrays but saving them for maybe a foreach function over each to generate cards, may just generate a card each time one is created
let engineer_array = [];
let intern_array = [];
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

       console.log(manager);

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
                    engineer_array.push(engineer);
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
                    name: "github",
                    message: "What is your Intern's Github?"
                }
                ]).then(data => {
                    let intern = new Intern(data.name, data.id, data.email, data.github);
                    intern_array.push(intern);
                    //build card here with data for intern maybe(then you wouldnt need array) something to think about
                    hireTeamMembers();
                });
            }

            if(data.team === "Done"){
            //this is where you should build out the html template for everything
            return;
            }


       });
       
}
buildTeam();