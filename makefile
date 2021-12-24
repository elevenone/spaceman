all: hello compile 42

hello: 
	echo 'building _42'

compile: 
	tsc




srcdir = package/_42/

modules = ${srcdir}fetchPartial.js\
		  ${srcdir}promiseDom.js\
		  ${srcdir}constants.js

42: 
	uglifyjs --compress -- ${modules} > package/_42/_42-min.js


.PHONY: clean
clean:
#   rm -rf *.o


# rollup.js