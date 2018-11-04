# React by example: Delete row

>Delete a row in a grid.

## Previous steps:
1. [load data](/connectodata.md)
2. [file structure](/filestructure.md)
3. [Display array in Grid](/displayGrid.md)

# 1. Create delete button:

- Delete button is created in movies.jsx
- Delete button uses bootstrap warning style
- Extra column is created = <th>

```sh
 render() {     
             
        return <table className="table">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                   <th>Rate</th>
                   <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =><tr>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button><button/></td>
                    <td><button className="btn btn-danger btn-sm m-2">Danger>Delete<button/></td>

                </tr> )}
                
            </tbody>
        </table>

   
```
# 2. Raise delete event:

- The onclick event raises the handleDelete event
- movies is a parameter
- key={movie._id} is necessary as an indexer => if not error. 

```sh
   return <table className="table">
            <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                   <th>Rate</th>
                   <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie =><tr key={movie._id}>

                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete(movie)}  className="btn btn-danger btn-sm m-2">Delete</button>  </td>

                </tr> )}
                
            </tbody>
        </table>

   
    }
```
# 3.  Handle delete event:

- filtering array => exclude  
- setState() to new filtered array.
- handleDelete 

```sh
   handleDelete = movie => {

const movies = this.state.movies.filter(m => m._id !== movie._id);
this.setState({movies:movies});

           };

   
```

# 3.  Empty grid:

- Display empty message when there are no elements in the grid  
- showing number of movies in database
- enclosing elements in  <React.Fragment> tag


```sh
   render() {    
        if(this.state.movies.length === 0)
        return <p> "there are no movies in the database"</p>
             
        return ( 
        <React.Fragment><p>showing {this.state.movies.length} movies in the database</p>
        <table className="table">
            <thead>
                <tr>
   
```
# 4.  Object destructuring:

- refactoring code using object destructuring

```sh
render() {  
        
        const {length:count} = this.state.movies; 
        if(count === 0)
        return <p> "there are no movies in the database"</p>
             
        return ( 
        <React.Fragment><p>showing {count} movies in the database</p>
```

