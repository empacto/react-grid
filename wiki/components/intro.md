# React Basics by examples
> Short blurb about what your product does.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

# Why react ? 
 
 ## State:
 - the more components the harder it is to maintain the state of the webpage (altered state = runtime changes)
 - postback (api call) sets state to initial state = compile time
 - before react juggling with jquery/ajax-containers = what affects what ??
 - react = virtual DOM => reacts maintains state automatically. 
 - react = 100 % control. Update only the state of the components you update
 - practical: SPA 20 components => 1 list updated => Virtual Dom renders only changes in list.=> setState


 ## Separation of concerns: 
 - classical mvc(model view controller) pattern 
 - react = component model = containerization
 - concerns => mvc are separated within component class or through inheritance
 - Whitin react component each concern has its own space.  
    - data = state
    - View = render 
    - Logic = js functions/methods 
-  Components can be refactored into:
     - subcomponents = inheritance
     - stateless functions = abstraction 
     - arrow functions
     - properties (encapsulation) 


 ## Maintenance:
 - components are the end goal 
 - functionality is thight up to component
 - component = containerization = update/addition/deletion (compile time) does not affect other components
 - ideal for SPA => variety + speed + quantity => complexity²
 

# Prior knowledge:
 - html5
 - css
 - bootstrap
 - javascript + js6/ECMA2015:
    - classes
    - objects:
        -
        - 
        - constructor 
    - arrow functions
    - spread operators
    - prototypes
    - Array.map
    - inheritance
    - Modules
    - named and default exports

