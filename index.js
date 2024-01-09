import chalk from 'chalk';
import { argv } from 'process';
import randomColor from 'randomColor';

function generateColor(color) {
  const block = `
###############################
###############################
###############################
#######     ${color}     #######
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
