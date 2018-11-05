#!/usr/bin/node

const log = console.log,
      arg = process.argv[2];

log('argv length：',process.argv.length);
  help();
} else {
  calc();
}

function help() {
  const msg = '' 
    + 'usage: cmd-name [OPTION] [expression]\n'
    + 'evaluate the expression.\n'
    + '\n'
    + 'Mandatory arguments to long options are mandatory for short options too.\n'
    + '  -h, --help output help information and exit\n';

  log(msg);
}

function calc() {
  log(arg + '=%s', eval(arg));
}