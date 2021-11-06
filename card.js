#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:shahbazalam75508@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Thank you for visiting. See you soon!!!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("             Md Shahbaz Alam"),
    handle: chalk.white("@SAEb-ai"),
    work: `${chalk.white("Co-Lead of Automated QA Team at")} ${chalk
        .hex("#2b82b2")
        .bold("Oppia Foundation")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("laser_39"),
    github: chalk.gray("https://github.com/") + chalk.green("SAEb-ai"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("md-shahbaz-alam-609a661b2"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${chalk.italic(
            "I am currently looking to work over frontend developer roles."
        )}`,
        `${chalk.italic("My inbox is always open. So, if you have a question ")}`,
        `${chalk.italic(
            "or just want to say hi, I will try my best to get back to you!"
        )}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
