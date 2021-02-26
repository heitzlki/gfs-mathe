import os

os.chdir('../main/')

os.system('rm *.pdf')
os.system('rm *.pdf_tex')
os.system('rm *.path.*')

os.chdir('../path/')
os.system('rm *.path.*')
