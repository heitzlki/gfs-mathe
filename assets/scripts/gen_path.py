import glob, os

os.chdir('../main/')

for file in glob.glob("*.path*"):
    os.system(f'inkscape -D --export-latex --export-type="pdf" {file}')
