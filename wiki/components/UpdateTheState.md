# React Updating the State in the evenhandler  by example
> A new updated state is created in the event handler
## 1. Steps:
1. button is clicked = onClick (counter).
2. Event is raised + id (props) = onDelete => (row id).
3. onDelete is bubbled up to the Parent (counters) and eventhandler fired.
4. The state is updated in the eventhandler based on the row id (props) which was passed on.

![](UpdateTheState.png)

## 2. : Update the state by id in the eventhandler

- the (row) id is passed on as a props to the eventhandler => handleDelete 
- A new state is created excluding the passed on id (props)
- this.setState updates the state based on the query (filter)

```sh

import Counter from './counter';

class Counters extends Component {
    state = {
        counters:
        [
            {id:1,value:4},
            {id:2,value:3},
            {id:3,value:6},
            {id:4,value:55}
        
        ]  

        };

        handleDelete = (counterId) => { //id parameter (props)
            console.log('delete is being handled' , counterId);
            const counters = this.state.counters.filter( c => c.id !== counterId);
             // A new state is based on the props (id)
            this.setState({counters: counters}); // rendering of the new state. => updating. 
        }

    render() { 

        console.log('props', this.props);
       
        return (
            <div>        
              
          {this.state.counters.map(counter => (<Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value}  selected={true}>
          <h4>COUNTER {counter.id}</h4>
          </Counter>))}
               
           
            </div>
          );
    }
}
 
export default Counters;
 
```

## 3. Avoid hardcoding fields by using generic props (encapsulation principle) :

- Using hardcoded fields like value={counter.value} & id={counter.id} need to be udated when changed
- generic counter={counter} encapsulates all fields. We reference  specific fields when necessary. 

```sh
import Counter from './counter';

class Counters extends Component {
    state = {
        counters:
        [
            {id:1,value:4},
            {id:2,value:3},
            {id:3,value:6},
            {id:4,value:55},
            {id:5,value:0}
        ]  

        };

        handleDelete = (counterId) => { //id parameter (props)
            console.log('delete is being handled' , counterId);
            const counters = this.state.counters.filter( c => c.id !== counterId); // A new state is based on the props (id)
            this.setState({counters: counters}); // rendering of the new state. => updating. 
        }

    render() { 

        console.log('props', this.props);
       
        return (
            <div>        
              
          {this.state.counters.map(counter => (<Counter key={counter.id} onDelete={this.handleDelete} counter={counter}>
          <h4>COUNTER {counter.id}</h4>
          </Counter>))}
               
           
            </div>
          );
    }
}
 
export default Counters;
```
- references need to include the counter (prop)  onClick={() => this.props.onDelete(this.props.counter.id)} 
- previous :  onClick={() => this.props.onDelete(this.props.id)} 

```sh
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) //method called when object Events is created
    {
        super(props);//access the constructor of the parent class = counters constructor  
        this.handleIncrement = this.handleIncrement.bind(this); //explicit hard binding = to current class 
       
    }
    state = { 
        value: this.props.counter.value
        
     }
     handleIncrement() // event handler.
     {  
         this.setState({value:this.state.value + 1} ); 
         // this refers now to the current object
         // this is binded to the currenct object in the constructor 
        //  this.handleIncrement = this.handleIncrement.bind(this);
     }
    render() { 
       // console.log('props', this.props);

        return (
            <div>
                <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>increment</button>
               <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} //reference the counter counter={counter} object set in counters
                className='btn btn-danger btn-sm m-2'>
                Delete
                </button>
            </div>


          );
    }
    formatCount()
    { 

        const{value} = this.state;
        return value === 0 ? <h1>zero</h1> :value; 

    }
    getBagdeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? 'warning' : "primary";
        return classes;
    }


}
 
export default Counter;

```
   

 
