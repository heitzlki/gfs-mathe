import * as path from 'path';
import * as glob from 'glob';
import * as chalk from 'chalk';
import { genSvg } from './genSvgSchriftlich';

(function genSvgs() {
  const argv = process.argv.map((val) => val);
  if (argv[2]) {
    const pathToFile = path.join(__dirname, '../');
    const files = glob.sync(`${pathToFile}/**/*${argv[2]}.svg`);
    if (files.length > 1) {
      console.log(`${chalk.red(`[/] Error: ${files.length} files aviable`)}`);
      console.log(`${files.map((file) => console.log(file))}`);
    } else if (files.length == 0) {
      console.log(`${chalk.red(`[/] Error: ${argv[2]} file not aviable`)}`);
    } else {
      genSvg(files.toString());
    }
  } else {
    const pathToFile = path.join(__dirname, '../');
    glob
      .sync(`${pathToFile}/**/*.svg`)
      .map((file) =>
        file.match(/.path/) || file.match(/.pdf_tex/) ? null : genSvg(file),
      );
  }
})();
