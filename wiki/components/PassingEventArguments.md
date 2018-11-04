# React Passing event arguments by example
> 
## 1 Problem:
1. event listeners are reference to a function not a function call in itself 
2. so we cannot pass an argument directly into the method.

## 2. Solution A: Pass an argument by use of a helper function

>doHanleEvent helper function makes passing the argument in the handeleEvent(id) 

```sh

handleEvent(id) 
    {
        console.log(id);
      this.setState({count:this.state.count + 1}); 
    }

    doHandleEvent = () =>
    {
        this.handleEvent({id:1});
    }


    render() { 
        return (
            <div>
                <span className='badge m-2 badge-primary' >{this.state.count}</span>
                <button className='btn btn-secondary btn-sm' onClick={this.doHandleEvent}>increment</button>
            </div>
          );
    }

}
 
```

## 3. Solution B: Inline arrow function :

```sh
handleEvent(id) 
    {
        console.log(id);
      this.setState({count:this.state.count + 1}); 
    }
  // this helper function is now redundant. 
    // doHandleEvent = () =>
    // {
    //     this.handleEvent({id:1});
    // }


render() { 
        return (
            <div>
                <span className='badge m-2 badge-primary' >{this.state.count}</span>
                <button className='btn btn-secondary btn-sm' onClick={() => this.handleEvent({id:1})}>increment</button>
            </div>
          );
    }

```
 - the handleEvent function is wrapped inside an arrow function, which makes the use of parameters possible.
 - the arrow function is a function in itself.   

 
