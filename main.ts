
import inquirer from "inquirer"
import chalk from "chalk"

class Person {
    private _personality: string;
    constructor() {
        this._personality = 'Mystery';
        


    
}

// user input:    
userInput(input:string) {
    
    //if else conditionn
    if(input.includes('Talk to others about yourself opnely')){
        this._personality = 'Talk happily'
    
    } else if (input.includes('Keep your words to yourself')){
        this._personality = 'Talk rude'
    }
}    

//return function:
get personality() {
    return this._personality
}

}

//create Objects:
class Main {
    public async main() {

        //await called out
        const ans = await inquirer.prompt({
            //Object create
            type: 'list',
            name: 'choice',
            message: chalk.yellow('Tell your behaviour ?'),
            choices: [
                '1: talk to others about my self',
                '2: keep quite dont ask questions'
            ]
        })
       
    //create a personal class
    let myPerson = new Person()

    myPerson.userInput(ans.choice);

        //output response
        console.log(`you are ${myPerson.personality}`)
}

}

const myObject = new Main();
myObject.main();


