# React Composing components in a three structure by example
> organising components in a three structure

# 1.Three structure:


![](composedcomponents.png)

# 2. Setup index.js & App.js :
- index.js
```sh
ReactDOM.render(<App/>, document.getElementById('root'));

```

- App.js
```sh
import React, { Component } from 'react';
import NavBar from './composing/navbar';
import Counters from './composing/counters';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
     <NavBar></NavBar>
      <main className="container">
<Counters/>
      </main>
        
      </div>
    );
  }
}

export default App;

```



# 3. Move all handlers to App.js (parent). 
 > 

```sh
 import React, { Component } from 'react';
import NavBar from './composing/navbar';
import Counters from './composing/counters';
import './App.css';


class App extends Component {

  state = {
    counters:
    [
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
      
    ]  

    };


  handleReset = () =>{
    console.log('reset is handled');

    const counters = this.state.counters.map(c =>{
     c.value = 0;
     return c;
    });

    this.setState({counters});

};

handleIncrement = counter =>  {
    console.log('handeling the increment');
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    console.log(this.state.counters[0]);
};

handleDelete = (counterId) => { //id parameter (props)
    console.log('delete is being handled' , counterId);
    const counters = this.state.counters.filter( c => c.id !== counterId); // A new state is based on the props (id)
    this.setState({counters: counters}); // rendering of the new state. => updating. 
};

  render() {
    return (
    <div>
 <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}   />

      <main className="container">
<Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset}/>
      </main>
    </div>
    );
  }
}

export default App;

}
 
export default Counters;

```
## 4. Create references via props:

```sh
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
        

    render() { 

        console.log('props', this.props);
       
        return (
            <div>        
              <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'> Reset</button>

          {this.props.counters.map(counter => (<Counter key={counter.id}
           onDelete={this.props.onDelete} 
           onIncrement={this.props.onIncrement}
          counter={counter}>
          <h4>COUNTER {counter.id}</h4>
          </Counter>))}
               
           
            </div>
          );
    }
}
 
export default Counters;
```
## 5. Create totalcount :

> count the number of elements > 0, display in the navbar

```sh
import React, { Component } from 'react';

class NavBar extends Component {
   
    render() { 
        return ( 
            <div>
            <nav className="navbar navbar-light bg-light">
         
            <span className="badge badge-pill badge-secondary">{this.props.totalCounters} </span>
         

            </nav>
            </div>
         );
    }
}
 
export default NavBar;

```