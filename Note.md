<!-- omit in toc -->
# Contents
- [Enter Node.js REPL](#enter-nodejs-repl)
  - [REPL Commands](#repl-commands)
- [Run a .js file](#run-a-js-file)
  - [import .js to REPL](#import-js-to-repl)
- [Create a variable](#create-a-variable)
- [Create a class](#create-a-class)
- [loop](#loop)
- [Modules](#modules)
  - [import variables](#import-variables)
- [npm](#npm)



# Enter Node.js REPL
```bash
    node
```
## REPL Commands
```bash
    # exit a block within REPL if you get stuck in a block of code
    .break
    .clear

    # open an inter editor, ctrl +d: save and quit 
    .editor

    # quit the REPL session
    .exit

    .help

    # load a file
    .load <filename>

    # really useful
    ## if the name exists, save will overwrite the file
    .save <filename.js>

```

# Run a .js file
```bash
    node <js file.js>
    node <js file>


```
## import .js to REPL
```bash
    node
    .load <js filename.js>

```

# Create a variable
```javascript
    let variable = 'hi'
```

# Create a class
```javascript
    class Cow {
        eat(food) {
            console.log(`I am eating ${food}`);
        }
    }

    let test = new Cow()
    test.eat('apple')

```

# loop
```javascript
    <variable>.forEach(<variable> => console.log(<variable>))

```

# Modules
## import variables
* not use `let`, but `exports`
* use `require` to import other modules

```javascript
    // module of variables: A.js
    exports.<variable> = ['hi']

    // module to import variables: B.js
    const <variable2> = require("./A");
    <variable2>.<variable_in_A.js>.forEach(m => console.log(m))
```


# npm
* a package manager for Node.js to manage the external packages

```bash
    # list of npm commands
    npm -l

    # init a Node.js application and creates a package.json
    npm init 

    # install packages
    ## --save: install the package as a dependency for your application
    ### --save-prod: explicitly install packages for production
    ### --save-dev: the package is only for development purposes
    ## --global: install the package globally on your computer 
    npm install <package>

    # reverse the install action
    npm uninstall <package>

    # save and upload your package to the npm package community
    npm publish

    # run your Node.js application
    npm start

    # quit the running application
    npm stop

    # open the likely documentation page (web page) for your specified package 
    npm docs <package>


```