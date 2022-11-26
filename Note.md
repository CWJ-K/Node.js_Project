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
