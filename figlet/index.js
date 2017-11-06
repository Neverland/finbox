/**
 * @file index
 * @author ienix(enix@foxmail.com)
 *
 * @since 2016/12/13
 */

/* global require */

const CHALK = require('chalk');

const FIN_BOX = [
    '________ ___  ________   ________  ________     ___    ___     ',
    '|\  _____\\  \|\   ___  \|\   __  \|\   __  \   |\  \  /  /|   ',
    '\ \  \__/\ \  \ \  \\ \  \ \  \|\ /\ \  \|\  \  \ \  \/  / /   ',
    ' \ \   __\\ \  \ \  \\ \  \ \   __  \ \  \\\  \  \ \    / /    ',
    '  \ \  \_| \ \  \ \  \\ \  \ \  \|\  \ \  \\\  \  /     \/     ',
    '   \ \__\   \ \__\ \__\\ \__\ \_______\ \_______\/  /\   \     ',
    '    \|__|    \|__|\|__| \|__|\|_______|\|_______/__/ /\ __\    ',
    '                                                 |__|/ \|__|   ',
    '                       Powered by FSG                          ',
    '   01100110 01101001 01101110 01100010 01101111 01111000       '
];


console.log(CHALK.yellow(`\n Version: ${process.env.npm_package_version}`));

console.log(CHALK.gray(`\n ${FIN_BOX.join('\n')} \n`));

console.log(CHALK.yellow(`\n fin-cli installed \n`));
