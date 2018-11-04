# React by example: Add pagination to a grid

>Add a pagination component to the grid component

## Previous steps:
1. [load data](/connectodata.md)
2. [file structure](/filestructure.md)
3. [Display array in Grid](/displayGrid.md)
4. [Delete row button](/deletrow.md)
5. [Add checkbox - like button](/AddLike.md)

# 1. Create pagination component:

- create separate pagination file = pagination.jsx  
- add stateless function componente => sfc react snippet
- add bootstrap paginate element


```sh
import React, { Component } from 'react';



const Pagination = props => {


    return (
 <nav>  
      <ul class="pagination"> 
    <li class="page-item">
    <a class="page-link" href="#">
    1</a>
    </li>
  </ul>
 </nav>
    );


} 
export default Pagination;
```
- reference the paginate component in movies.jsx

```sh

import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'


``` 

- add pagination reference to the render() method => whithin  <React.Fragment> 

```sh
    
        <Pagination>      
        </Pagination>
        </React.Fragment>
```



# 2. Display pagination elements dynamically:

- define the number of element (pageSize) the page can display in the state method = movies.jsx

```sh
 import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'


class Movies extends Component {
    state = { 
        movies : getMovies(),   
        pageSize: 4    // the maximum number of elements on each page  
           };
```
- object destructuring: 
-pageSize = this.state.pageSize
-count = this.state.movies.lenght

```sh
    render() {  
        const {pageSize,movies:allMovies} = this.state;
        const {length:count} = this.state.movies; 
        ....

          
        <Pagination 
        itemsCount={count}
        pageSize={pageSize}
     
        </Pagination>
        </React.Fragment>
  
```
- calculate the number of pages = total elements (itemsCount) /max number of elements on each page (pageSize)
- pass the variables via props to pagination.jsx
- import lodash : import _ from 'lodash';
- object destructuring: const {itemsCount, pageSize,onPageChange,currentPage} = props;
- calculate :  const pagesCount = itemsCount / pageSize; = number of pages
- calculate :  const pages = _.range(1,pagesCount + 1); = creats an array from 1 .. pagesCount + 1 
- display number of pages in pagination using array.map method: pages.map(page =>( <li  className="page-item"}><a className="page-link" >{page}</a></li> ))

```sh 
 import React, { Component } from 'react';
import _ from 'lodash';


const Pagination = props => {


 const {itemsCount, pageSize,onPageChange,currentPage} = props;

    console.log(currentPage);

 const pagesCount = itemsCount / pageSize;

const pages = _.range(1,pagesCount + 1);

    return (
 <nav>
  
     <ul className="pagination">
  {pages.map(page =>(
    <li key={page} className="page-item"}>
    <a className="page-link" >{page}</a></li>

  ))}
  </ul>
 </nav>
    );


}
 
export default Pagination;
```

# 3.  Display conditionally:

- if there is only 1 page =>  hide pagination 
- const pagesCount = Math.ceil(items/count) => rounds the pages to full number 
- if(pagesCount === 1) return null; = hides the pagination element = stops rendering. 

```sh
const pagesCount = Math.ceil(itemsCount / pageSize);
if(pagesCount === 1) return null;
``` 
- displaying the active page in the pagination 


```sh
className={ page===currentPage?"page-item active":"page-item"}   
```


# 4.  Pagination click event:

- create onClick event in paginate.jsx and pass the page parameter
- the page parameter is the current page in the pages array.
```sh
<nav>
  
     <ul className="pagination">
  {pages.map(page =>(
    <li key={page} className={ page===currentPage?"page-item active":"page-item"}>
    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>

  ))}
  </ul>
 </nav>
```
- activate the handlePageChange function in movies.jsx

```sh
   <Pagination 
        itemsCount={count}
        pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={this.handlePageChange}>
        </Pagination>
        </React.Fragment>

```
- initialize currentPage property to 1 in the state object. 

```sh
   class Movies extends Component {
    state = { 
        movies : getMovies(),
        currentPage:1,
        pageSize: 4      
           };
```
- set the state to the clicked page (page parameter) 
- the state of the pagination componente will be updated by setState() 

```sh
 handlePageChange = page => {
            this.setState({currentPage:page});
               console.log('page change', page);
           }

``` 
- create separate file paginate.jsx file 



# 5. Change the page:
> changes the pages accoarding to the page clicked in the pagination example

- create the paginate.jsx fucntion 
- the following formulate defines which records will be displayed based on the following parameters: 
    - source of data (movies)
    - current page
    - pageSize

- the function will return  (slice + take )a range of records.
 

```sh

import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
   // _.slice(items,startIndex)
return  _(items).slice(startIndex).take(pageSize).value();
}
```
- the paginate function is referenced in the movies.jsx component
- the paginate function is activated in the render() method 

```sh
const movies = paginate(allMovies,currentPage,pageSize);
``` 
- the movies displayed in the grid depend now on the state of pagination component

```sh
import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies : getMovies(),
        currentPage:1,
        pageSize: 4      
           };

           handleLike = movie => {
           console.log(movie);
               //cloning the movies object
               const movies = [...this.state.movies]; //cloning the movies object
               const index = movies.indexOf(movie); // find the index of the movie object (paramenter )
               movies[index] = {...movies[index]}; //clone 
               movies[index].liked = !movies[index].liked; //compare if not the same
                this.setState({movies});
                // backend code is persisted here 
 
           }

           handleDelete = movie => {

            const movies = this.state.movies.filter(m => m._id !== movie._id);
            this.setState({movies:movies});

           };

           handlePageChange = page => {
            this.setState({currentPage:page});
               console.log('page change', page);
           }

           

    render() {  
        const {pageSize,currentPage,movies:allMovies} = this.state;
        const {length:count} = this.state.movies; 
        if(count === 0)return <p> "there are no movies in the database"</p>

        const movies = paginate(allMovies,currentPage,pageSize);
             
        return ( 
        <React.Fragment><p>showing {count} movies in the database</p>
        <table className="table">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                   <th>Rate</th>
                   <th></th>
                   <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie =><tr key={movie._id}>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked}></Like></td>
                    <td><button onClick={() => this.handleDelete(movie)}  className="btn btn-danger btn-sm m-2">Delete</button>  </td>

                </tr> )}
                
            </tbody>
        </table>
        
        <Pagination 
        itemsCount={count}
        pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={this.handlePageChange}>
        </Pagination>
        </React.Fragment>
        
);
   
    }
}
 
export default Movies;
``` 

 

