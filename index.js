import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Function to generate block of # with hex value in the middle
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
  // Use chalk to color the block with the generated hex color value
  return chalk.hex(color)(block);
}
// Variables for generating hue and luminosity using argv
const hue = argv[2];
const luminosity = argv[3];

// Call randomColor function, with properties for hue and luminosity and then generate color based on then
const color = randomColor({ hue: hue, luminosity: luminosity });

// Call generateColor function and log const block with color hex value in the middle
console.log(generateColor(color));
