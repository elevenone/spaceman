all: greeting compile 42

compile: 
    tsc

greeting: 
    echo 'building _42'


srcdir = package/_42/

modules = ${srcdir}fetchPartial.js\
          ${srcdir}promiseDom.js\
          ${srcdir}constants.js

42: 
    uglifyjs --compress -- ${modules} > package/_42/_42.js


.PHONY: clean
clean:
#   rm -rf *.o


# rollup.js