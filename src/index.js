import chalk from "chalk";
const { log } = console;
const { green, blue } = chalk;

export function example(input) {
  log(green(`received input: ${blue(input)}`));
  return input;
}

example(1);
