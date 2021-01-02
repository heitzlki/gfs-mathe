import glob, os

os.chdir('../svg/')

for file in glob.glob("*.svg"):
    os.system(f'inkscape -C -T --export-filename={file.replace(\'.svg\', \'.path.svg\')} {file}')
    os.system(f'mv file.replace(\'.svg\', \'.path.svg\')} ../main')
    os.system(f'mv file.replace(\'.svg\', \'.path.svg\')} ../path')
