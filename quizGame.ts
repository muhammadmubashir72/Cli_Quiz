#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n\tWelcome to My Quiz Project @Mubashir Tech 516"));
console.log(chalk.bold.yellow("\nYou are required to gain maximum 4 points for Win"));

let points = 0

// ------------------------------questuion1-----------------------------------------

let question1 = await inquirer.prompt({

    name:"one",
    message: "Typescript is a superset off?",
    type: "list",
    choices: ["python","c++","java","javascript"]
})

if (question1.one === "javascript"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}
// -----------------------------questuion2--------------------------------------------------------

let question2 = await inquirer.prompt({

    name:"two",
    message: "who is the founder of microsoft?",
    type: "list",
    choices: ["elon musk","mark","bill gates","Anders hejlsberg"]
})

if (question2.two === "bill gates"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}

// --------------------------------------questuion3---------------------------------------------

let question3 = await inquirer.prompt({

    name:"three",
    message: "What is the file extension for typescript?",
    type: "list",
    choices: ["j.s",".ts",".html",".css"]
})

if (question3.three === ".ts"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}

// --------------------------questuion4--------------------------------------------------------


let question4 = await inquirer.prompt({

    name:"four",
    message: "Typescript code is compiled into?",
    type: "list",
    choices: ["machine code","Assembly code","javascript","typescript by tcode"]
})

if (question4.four === "javascript"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");  
}

// -------------------------------question5---------------------------------------------------


let question5 = await inquirer.prompt({

    name:"five",
    message: "what is the output og console.log(typeof true);?",
    type: "list",
    choices: ["string","number","boolean","void"]
})

if (question5.five === "boolean"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

// output condition

if(points >= 4){
    console.log(chalk.bold.green("Congratulation"));
    console.log(chalk.bold.green(`Your points ${points}`));
}
else{
    console.log(chalk.bold.red("You loss! try next time"));
    console.log(chalk.bold.red(`Your points ${points}`));

}