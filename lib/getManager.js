/*USE PICTURE FROM PHONE TO RECREATE A NEW BUILDTEAM.JS AND NEST THENS WITH EACH INQUIRE HAVING A NEW PROMPT TO BUILD AN OBJECT FOR EACH CLASS
*/
const Manager = require("./Manager");
const inquire = require("inquirer");

const managerInquire = () =>{
   return inquire.prompt([{
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
        
        ]);
}


const  getManager = async() => {
    try{
        
        const data = await managerInquire();
        console.log(data);
        let manager = new Manager(data.name, data.id, data.email, data.office_number);
        
        //figure out how to use this in other files

        return manager;
        
    }
    catch{
        if(err) throw err;
    }

}

module.exports ={
    
    getManager: getManager
} 
    
