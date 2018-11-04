# React by examples: Add a checkbox column to a grid

>Add a like button as a column to the grid, by integrating a child component. (controlled component)

## Previous steps:
1. [load data](/connectodata.md)
2. [file structure](/filestructure.md)
3. [Display array in Grid](/displayGrid.md)
3. [Delete row button](/deletrow.md)

# 1. Create like component file:

- create separate file for like component 
- use imrc + cc codesnippets (react code snippets)


```sh
import React, { Component } from 'react';

class Like extends Component {
    
    render() { 

        return ( <i class="fa fa-heart-o"  aria-hidden="true"></i> );
    }
}
 
export default Like;
```
- reference the like component in movies.jsx

```sh

import Like from './common/like'


 <tbody>
                {this.state.movies.map(movie =><tr key={movie._id}>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={true}></Like></td>
                    <td><button onClick={() => this.handleDelete(movie)}  className="btn btn-danger btn-sm m-2">Delete</button>  </td>

                </tr> )}
                
            </tbody>
``` 


# 2. Create conditonal rendering:

- render the output conditionally = like.jsx
- add liked field to the fakeMovieService.js (data file)
- change movies.jsx to display the liked field

```sh
 render() { 

        let classes = "fa fa-heart";

        if(!this.props.liked) classes += "-o";
        return ( <i className={classes} aria-hidden="true"></i> );
    }
```

fakeMovieService.js 

```sh
import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked:true
  },
  
```
display the liked field = liked={movie.liked}

```sh 
 <tbody>
                {this.state.movies.map(movie =><tr key={movie._id}>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked}></Like></td>
                    <td><button onClick={() => this.handleDelete(movie)}  className="btn btn-danger btn-sm m-2">Delete</button>  </td>

                </tr> )}
                
            </tbody>
```

# 3.  Raise click event:

- raising the onLiked event by activating the onClick event in like.jsx 
- changing the cursos style inline style={{cursor:'pointer'}} emulating finger pointer


```sh
 render() { 

        let classes = "fa fa-heart";

        if(!this.props.liked) classes += "-o";
        return ( <i onClick={this.props.onLiked} style={{cursor:'pointer'}}className={classes} aria-hidden="true"></i> );
    }

   
```


# 4.  Handle like event:

- create onClick event in movies.jsx 
- pass movie as a parameter: onClick={() => this.handleLike(movie)}
- movie originates from the array.map method 
- all events are handled in the same file. (movies.jsx)

```sh
  <tbody>
                {this.state.movies.map(movie =><tr key={movie._id}>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked}></Like></td>
                    <td><button onClick={() => this.handleDelete(movie)}  className="btn btn-danger btn-sm m-2">Delete</button>  </td>

                </tr> )}
            

```
- clone the movies array
- get indexOf row
- change value 
- setState()

```sh
    handleLike = movie => {
           console.log(movie);
               //cloning the movies object
               const movies = [... this.state.movies]; //cloning the movies object
               const index = movies.indexOf(movie); // find the index of the movie object (paramenter )
               movies[index] = {...movies[index]}; //clone 
               movies[index].liked = !movies[index].liked; //compare if not the same
                this.setState({movies});
                // backend code is persisted here 
 
           }
```
# .  Functional stateless component:
> transform the class in a  functional stateless component, only for style purposes

```sh
class Like extends Component {
    
    render() { 
        let classes = "fa fa-heart";

        if(!this.props.liked) classes += "-o";
        return ( <i 
            onClick={this.props.onClick} 
            style={{cursor:'pointer'}}
            className={classes} 
            aria-hidden="true"
        /> );

    }
}
```
- sfc (react snippet) creates a stateless functional component
- move the code between the render brackets to the stateless functional component
- remove this.props references and set props as a parameter to the function 

```sh
import React, { Component } from 'react';
// input: boolean
//output: click => toggleling

const Like  = (props) => {
    let classes = "fa fa-heart";    
    if(!props.liked) classes += "-o";
    return ( <i 
        onClick={props.onClick} 
        style={{cursor:'pointer'}}
        className={classes} 
        aria-hidden="true"
    /> );

}
 
export default Like;
``` 

 

