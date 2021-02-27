import * as chalk from 'chalk';
import * as glob from 'glob';
import { execSync } from 'child_process';

export function genSvg(file: string) {
  try {
    let fileName = file.split('/')[file.split('/').length - 1];
    let generalPath = file.split('/').slice(0, -2).join('/') + '/';

    let pathFile = fileName.replace('.svg', '.path.svg');
    let pathPdfTexFile = fileName.replace('.svg', '.path.svg.pdf');
    let tmp = generalPath + 'tmp/';

    try {
      execSync(
        `inkscape -C -T --export-filename=${tmp + pathFile} ${file}`,
      ).toString();
    } catch (error) {
      console.clear();
      console.log(error.message.toString());
      console.log(error.stderr.toString());
      console.log(error.stdout.toString());
      console.log(
        error.status == 0 ? chalk.green('[*] Success') : chalk.red('[/] Error'),
      );
    }
    try {
      execSync(
        `inkscape -C --export-latex --export-type="pdf" --export-filename=${
          tmp + pathPdfTexFile
        } ${tmp + pathFile}`,
      ).toString();
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
      chalk.green(`[*] File ${fileName} has been successful exported`),
    );
  } catch {
    console.clear();
    console.log(chalk.red(`[/] Error by exporting ${file}`));
  }
}
