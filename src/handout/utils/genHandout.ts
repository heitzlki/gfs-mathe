import { execSync } from 'child_process';

(function genHandout() {
  try {
    process.chdir(`${__dirname}/../`);
  } catch (error) {
    console.clear();
    console.log(error);
  }

  try {
    execSync(
      'pdflatex -synctex=1 -interaction=nonstopmode schriftlich.tex'
    ).toString();
  } catch (error) {
    console.clear();
    console.log(error.message.toString());
    console.log(error.stderr.toString());
    console.log(error.stdout.toString());
    console.log(error.status);
  }
})();
