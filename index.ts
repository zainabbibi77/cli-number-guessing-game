#! usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 +1)

const answrer = await inquirer.prompt([

{
    name:"userGuessNumber",
    type:"number",
    message:"enter your guess number(Number limit from 1 to 5)",

},

]);

if(answrer.userGuessNumber === randomNumber){
    console.log("Congratulations ! You guess a right number.");

}
else{
    console.log("sorry, you guess a wrong number");
}
    