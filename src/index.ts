#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';
import { clear } from 'console';
import figlet from 'figlet';

console.log(chalk.yellowBright.bold(figlet.textSync('WHAT THE FUCK', {
  font: 'Roman',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
})));

const program = new Command()
program
  .version("0.0.3")
  .description("A Hello World of cli")
  .option("-p, --prepare", "prepare to hi")
  .option("-b, --bbq", "go bbq")
  .option("-e, --eat <foodType>", "you eat [burger]")
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

const options: {
  eat: string;
} = program.opts();

console.log(`you eat ${options.eat ?? 'nothing'}`);
