import os

os.chdir('../../')
print(os.getcwd())

os.system('rm *.aux')
os.system('rm *.log')
os.system('rm *.out')
os.system('rm *.synctex.gz')
os.system('rm *.toc')

