# React composing by example
> integrating multiple components
#1. Setup:
1. counters = parent component 
2. counter =  child component

> The integration is based on three principle. The parent component is referenced in the index
![](error1.png)

# 2. The parent component is referenced in index.js (three principle) :
```sh
import Counters from './composing/counters';
import 'font-awesome/css/font-awesome.css';


ReactDOM.render(<Counters/>, document.getElementById('root'));

serviceWorker.unregister();

```
The child component is called as an object into the parent component. 
- via an import statement
- in the render block  = <Counter>

```sh
import React, { Component } from 'react';
import Counter from './counter';  // child component call
class Counters extends Component {
    state = {
        counters:
        [
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        
        ]  

        }
    render() { 
        return (
            <div>
            
              
          {this.state.counters.map(counter => <Counter key="{counter.id}" value={counter.value}></Counter>)}
               
           
            </div>
          );
    }
}
 
export default Counters;

```

## 2. Child component:

```sh
import React, { Component } from 'react';

class Counter extends Component {
    // constructor() //method called when object Events is created
    // {
    //     super();//binds the constructor to 
    //     this.handleIncrement = this.handleIncrement.bind(this); //explicit hard binding = to current class 
       
    // }
    state = { 
        count: this.props.value
        
     }
     handleIncrement() // event handler.
     {  
         this.setState({count:this.state.count + 1} ); 
         // this refers now to the current object
         // this is binded to the currenct object in the constructor 
        //  this.handleIncrement = this.handleIncrement.bind(this);
     }
    render() { 
       // console.log('props', this.props);

        return (
            <div>
                <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
                <button
                onClick={this.handleIncrement} className='btn btn-secondary btn-sm'
                >increment</button>
            </div>


          );
    }
    formatCount()
    { 

        const{count} = this.state;
        return count === 0 ? <h1>zero</h1> :count; 

    }
    getBagdeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : "primary";
        return classes;
    }


}
 
export default Counter;
```
