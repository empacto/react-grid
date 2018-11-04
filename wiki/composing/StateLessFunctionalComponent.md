# React  Stateless functional component by example
> alterantive way of representing a react class. (style) 

# 1.React Class:
a React classe can be transformed in a stateless functional componente when:
- only render method
- no state or other methods

```sh
import React, { Component } from 'react';

class NavBar extends Component {
   
    render() { 
        return ( 
            <div>
            <nav className="navbar navbar-light bg-light">
              <span class="badge badge-pill badge-light">{this.props.totalValue}</span>
            <span className="badge badge-pill badge-secondary">{this.props.totalCounters}  </span>
         
      
            </nav>
            </div>
         );
    }
}
 
export default NavBar;

```

# 2. Stateless functional Component :

```sh
const NavBar = () => {
    return ( 
        <div>
        <nav className="navbar navbar-light bg-light">
          <span class="badge badge-pill badge-light">{this.props.totalValue}</span>
        <span className="badge badge-pill badge-secondary">{this.props.totalCounters}  </span>     
    
        </nav>
        </div>
     );

    
};

```

# 3. spf snippet :
- spf command inserts the snippet for a stateless functional component
- react snippets must be installed 

```sh

//spf 
const  = () => {
    return (  );
}

```
