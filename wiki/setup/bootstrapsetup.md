# React visual studio code setup by examples

>basic visual studio code react setup.

# 1.  utilities:
- visual studio code
- live html previewer ( vsc extension)
- One Dark pro (vsc extension)
- Prettier (vsc extension)
- Debugger for chrome (vsc extension)
- Simple react snippets (vsc extension)
- lodash (vsc extension)

# 2. create react app:

>setup react 

setup react from command shell  :

```sh
create-react-app vidly

```

# 3. install bootstrap + awesome: 

bootstrap and awesome intallation from the shell  :

```sh
cd vidly
npm i bootstrap@4.1.1 font-awesome@4.7.0 

```

# 4. preview/debugging via chrome:

intall chrome debugging by including following parameters in launch.json file 

```sh
{
    "version": "0.2.0",
    "configurations": [
        
        {
            "type": "chrome",
            "request": "launch",
            "name": "Vidly react Chrome  localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
    
        },
        {
            "type": "chrome",
            "request": "attach",
            "name": "Attach to Chrome",
            "port": 9222,
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

# 5. start debugger: 


```sh
npm start

```