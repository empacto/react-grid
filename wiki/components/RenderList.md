# React list by example
> Rendering list with React
## fixed list:
1. fixed list elements - bootstrap
## Dynamic list
1. map
2. filter
3. Conditional rendering


>key => unique value is necessary => virtual DOM needs unique value to update 

```sh
import React, { Component } from 'react';

class RenderList extends Component {
    state = { 
        name:'Alex',
        surname:'Smith',
        age:32,
        tags:['tag1','tag2', 'tag3'],
        arr:[1,11,22,3,9,45,16,33,2,8,4]
     }
    render() { 
        return ( 
            <div>
                <ul class="list-group">
                <li class="list-group-item">{this.state.name}</li>
                <li class="list-group-item">{this.state.surname}</li>
                <li class="list-group-item">{this.state.age}</li> 
                </ul>
                <p>map:(displayall)</p>
                <ul class="list-group">
                <li class="list-group-item">{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</li>
                </ul>
                <p>filter:> 10</p>
                <ul key={this.state.arr}>{this.state.arr.filter(el => el > 10  )}</ul>
            </div>
         );
    }

     
}
 
export default RenderList;
```



