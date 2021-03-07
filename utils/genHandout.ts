import * as path from 'path';
import * as chalk from 'chalk';
const { execSync } = require('child_process');

(async function genHandout() {
  const pathToHandout = path.join(
    __dirname,
    '../src/schriftlich/schriftlich.tex',
  );

  try {
    const cmd = `pdflatex -synctex=1 -interaction=nonstopmode ${pathToHandout}`;
    execSync(cmd).toString();
  } catch (error) {
    await console.clear();
    console.log(error.message.toString()); // Holds the message you typically want.
    console.log(error.stderr.toString()); // Holds the stderr output. Use `.toString()`.
    console.log(error.stdout.toString()); // Holds the stdout output. Use `.toString()`.
    console.log(
      error.status == 0 ? chalk.green('[*] Success') : chalk.red('[/] Error'),
    );
  }
})();
