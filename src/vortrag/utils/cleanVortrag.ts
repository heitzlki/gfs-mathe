import * as path from 'path';
import * as glob from 'glob';
import * as chalk from 'chalk';
import { deleteFile } from './deleteFileVortrag';

(function clean() {
  const argv = process.argv.map((val) => val);
  if (argv[2]) {
    const pathToFile = path.join(__dirname, '../');
    const files = glob.sync(
      `${pathToFile}/**/*${argv[2]}.+(pdf_tex|pdf|path|aux|log|out|tec|synctex.gz)*`
    );
    if (files.length == 0) {
      console.log(`${chalk.red(`[/] Error: ${argv[2]} file not aviable`)}`);
    } else {
      deleteFile(files.toString());
    }
  } else {
    const pathToFile = path.join(__dirname, '../');
    glob
      .sync(
        `${pathToFile}/**/*.+(pdf_tex|pdf|path|aux|log|out|toc|synctex.gz)*`
      )
      .map((file) => deleteFile(file));
  }
})();
