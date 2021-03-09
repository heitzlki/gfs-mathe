import * as chalk from 'chalk';
import * as glob from 'glob';
import { execSync } from 'child_process';

export function deleteFile(file: string) {
  try {
    let fileName = file.split('/')[file.split('/').length - 1];

    try {
      execSync(`rm ${file}`).toString();
    } catch (error) {
      console.clear();
      console.log(error.message.toString());
      console.log(error.stderr.toString());
      console.log(error.stdout.toString());
      console.log(
        error.status == 0 ? chalk.green('[*] Success') : chalk.red('[/] Error'),
      );
    }
    console.log(
      chalk.green(`[*] File ${fileName} has been successful deleted`),
    );
  } catch {
    console.clear();
    console.log(chalk.red(`[/] Error by deleting ${file}`));
  }
}
