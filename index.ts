#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;

} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal in typescript?",
        choices: ["a == b", "a === b", "a = b", "a !==b" ]
            

    },

    {
        name: "question_2",
        type: "list",
        message: "Q2 Which of the follwing characters is commonly allowed in variable names in typescript?",
        choices: ["$", "@", "#","&" ]
            

    
    },
    
    {
        name: "question_3",
        type: "list",
        message: "Q3 Which of the follwing characters is commonly allowed in variable names in typescript?",
        choices: ["+", "-", "#","&" ]
            

    
    },

    {
        name: "question_4",
        type: "list",
        message: "Q4 In typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";","," ]
            

    
    },

    {
        name: "question_5",
        type: "list",
        message: "Q5 Which method of Inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()","run()" ]
            

    
    },

]);

let score: number = 0;

switch(quiz.question_1){
    case "a !==b":
        console.log(chalk.bold.yellow("1. correct"));
        ++score;
        break;
        default:
            console.log(chalk.greenBright("1. Incorrect!"));
            

}

switch(quiz.question_2){
    case "$":
        console.log(chalk.bold.yellow("2. correct"));
        ++score;
        break;
        default:
            console.log(chalk.greenBright("2. Incorrect!"));
            

}

switch(quiz.question_3){
    case "+":
        console.log(chalk.bold.yellow("3. correct"));
        ++score;
        break;
        default:
            console.log(chalk.greenBright("3. Incorrect!"));
            

}

switch(quiz.question_4){
    case ":":
        console.log(chalk.bold.yellow("4. correct"));
        ++score;
        break;
        default:
            console.log(chalk.greenBright("5. Incorrect!"));
            

}

switch(quiz.question_5){
    case "prompt":
        console.log(chalk.bold.yellow("5. correct"));
        ++score;
        break;
        default:
            console.log(chalk.greenBright("5. Incorrect!"));
            

}

console.log(`Score: ${score}`);
