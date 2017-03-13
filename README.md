install node and run "npm install" to install gulp. 

Then run "gulp" in the project root and any less code saved will be compiled. You might need to periodically the terminal since gulp halts whenever any syntax errors are pushed. If thats the case, just ctrl-c and gulp again after fixing the error.

Also, you should develop by running the index.html in a webserver as opposed to just displaying the html in a web browser. This one is easy to run in a new terminal window "python -m SimpleHTTPServer 8000"
Then navigate to "localhost:8000" in your web browser.



All the less code is in assets/less/

The less is split into 3 folders in breakpoints/ based on different breakpoints. 

All code in breakpoints/desktop/ will be applied after 1024px width

tablet breakpoint is between 768px and 1024px

mobile breakpoint is less than 767px

Every div should get its own .less file. If you add a new div and are writing CSS for the mobile breakpoint, create a new file in breakpoints/mobile and add your code to that file. The file name by convention is the name of the div's class or id name. Then add the import statement in the container.less file.

If the import statement is not added, the compiler will not find the new less file and it won't be compiled into CSS.

If you save any less with syntax errors, gulp might stop running so just exit the process and rerun gulp. 