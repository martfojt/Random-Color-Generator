import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

function generateColor(color) {
  const block = `
###############################
###############################
###############################
######                   ######
######     ${color}       ######
######                   ######
###############################
###############################
###############################
`;
  return chalk.hex(color)(block);
}

const hue = argv[2];
const luminosity = argv[3];

const color = randomColor({ hue: hue, luminosity: luminosity });

console.log(generateColor(color));
