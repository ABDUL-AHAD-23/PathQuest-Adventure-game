console.log(chalk.bold.blueBright("WELCOM ON PathQuest ADVENTURE GAME"));

import chalk from 'chalk';
import inquirer from 'inquirer';

async function startGame() {
    console.log("Welcome to the Adventure Game!");
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name, brave adventurer?',
        },
    ]);

    console.log(`Hello, ${name}! Your adventure begins now...`);

    const { path } = await inquirer.prompt([
        {
            type: 'list',
            name: 'path',
            message: 'You are standing at a crossroads. Do you want to go left or right?',
            choices: ['Left', 'Right'],
        },
    ]);

    if (path === 'Left') {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'You encounter a wild beast! Do you fight or run?',
                choices: ['Fight', 'Run'],
            },
        ]);

        if (action === 'Fight') {
            console.log('You bravely fight the beast and win! You are a true hero!');
        } else {
            console.log('You run away and live to fight another day. Wise choice!');
        }
    } else {
        const { treasure } = await inquirer.prompt([
            {
                type: 'list',
                name: 'treasure',
                message: 'You find a chest of treasure! Do you open it or leave it?',
                choices: ['Open', 'Leave'],
            },
        ]);

        if (treasure === 'Open') {
            console.log('The chest is filled with gold! You are rich!');
        } else {
            console.log('You leave the chest untouched, respecting the unknown.');
        }
    }

    console.log('Your adventure ends here. Thank you for playing!');
}

// Start the game
startGame();
