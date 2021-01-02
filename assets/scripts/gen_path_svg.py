import glob, os, sys
#From https://stackoverflow.com/questions/287871/how-to-print-colored-text-in-python
class bcolors:
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    FAIL = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'

os.chdir('../svg/')

def exportFile(file):
	try:
	    os.system(f'inkscape -C -T --export-filename={file.replace(".svg", ".path.svg")} {file}')
	    os.system(f'cp {file.replace(".svg", ".path.svg")} ../main')
	    os.chdir('../main')
	    os.system(f'inkscape -C --export-latex --export-type="pdf" {file.replace(".svg", ".path.svg")}')
	    os.chdir('../svg/')
	    os.system(f'mv {file.replace(".svg", ".path.svg")} ../path')
	    print(f'{bcolors.OKGREEN}[*] File {file} has been successful exported{bcolors.ENDC}')
	except:
		print(f'{bcolors.FAIL}[/] Error with {file}{bcolors.ENDC}')

def forOneFile(arg):
	exportFile(arg)

def forAllFiles():
	for file in glob.glob("*.svg"):
		exportFile(file)
    
if __name__ == "__main__":
	try:
		arg = sys.argv[1]
	except:
		print("Use --all or <file-name>")
		exit()
	if(arg == "--all"):
		forAllFiles()
	else:
		forOneFile(arg)	
	
