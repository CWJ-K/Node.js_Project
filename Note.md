<!-- omit in toc -->
# Contents
- [Enter Node.js REPL](#enter-nodejs-repl)
  - [REPL Commands](#repl-commands)
  - [see HTTP status code](#see-http-status-code)
- [Run a .js file](#run-a-js-file)
  - [import .js to REPL](#import-js-to-repl)
- [Create a variable](#create-a-variable)
- [Create a class](#create-a-class)
- [loop](#loop)
- [Modules](#modules)
  - [import variables](#import-variables)
  - [const vs let vs var](#const-vs-let-vs-var)
- [npm](#npm)
- [Generate a package](#generate-a-package)
- [Port](#port)
- [Code](#code)
  - [callback function](#callback-function)
  - [call website by shell](#call-website-by-shell)
  - [methods](#methods)



# Enter Node.js REPL
* REPL: programming language environment, like consol
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
## see HTTP status code
```bash
    http.STATUS_CODES

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
## const vs let vs var
|Command|Meaning|
|:---:|:---|
|const|can not be updated and re-declared => will not covered by global or local variables|
|let|can be updated, but can not be re-declared|
|var|can be updated and re-declared|


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

# Generate a package
* `package-lock.json`
  * keep track of your package installations and manage the state and history of your project's dependencies
```bash
    # navigate to your folder in the terminal
    npm init

    # install packages
    npm install <package> --save
    npm i <package> -S

```

# Port
|Port|Meaning|
|:---:|:---|
|3000|generally used for web servers in development|
|80|HTTP|
|443|HTTPS|


# Code
## callback function
* request always comes before responses

```javascript
    (req, res) => {}
```

## call website by shell
```bash
    curl --data 'hello, how are you?' http://localhost:<port>

```

## methods
* Buffer: stream data in binary format