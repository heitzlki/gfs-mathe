import * as path from 'path';
import * as chalk from 'chalk';
const { execSync } = require('child_process');
import * as glob from 'glob';

async function startTexmaker() {
  const pathToModules = path.join(__dirname, '../');
  const modules = glob
    .sync(`${pathToModules}/**/*.tex`)
    .map((module) => module);

  let modulesString = '';
  modules.map((module) => (modulesString = `${modulesString} ${module}`));

  try {
    const cmd = `texmaker ${modulesString}`;
    execSync(cmd).toString();
  } catch (error) {
    await console.clear();
    console.log(error.message.toString());
    console.log(error.stderr.toString());
    console.log(error.stdout.toString());
    console.log(
      error.status == 0 ? chalk.green('[*] Success') : chalk.red('[/] Error'),
    );
  }
}

startTexmaker();
