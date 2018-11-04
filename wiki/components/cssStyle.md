# React css style by example
> Ways of css styling.
## Image:
1. width/height inline
2. width/heigth className
## Bootstrap Elements
1. inline
2. className
3. Dynamical (function)
## htlm elements
1. inline
2. className
3. Dynamical (function)

>  css .class => className in react to avoid conflict 

```sh
import React, { Component } from 'react';

class StyleAttributes extends Component {
    state = {        
        imageUrl:'https://picsum.photos/200',
        initialtext:'this is my initial text',
        count:0
     }
   //css .class
     imageStyle=
     {
        class:"img-circle"
     }
     styles=
     {
         color: 'green',
         fontWeight:'bold'
     }
    render() { 
        return ( 
            <div>
            <img src={this.state.imageUrl}   alt='' width="500" height="500" rounded /> 

            <span style={{fontSize:50}}>simpele tekst</span>
            <p style={this.styles}>{this.state.initialtext}</p>
            <button className='btn btn-secondary btn-lg'> increment</button>
            <span className={this.getBagdeClasses()}>  {this.formatCount()}</span>
            </div>
         );
    }

    getBagdeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : "primary";
        return classes;
    }

    formatCount()
    { 

        const{count} = this.state;
        return count === 0 ? <h1>zero</h1> :count; 

    }
}

export default StyleAttributes;

```



