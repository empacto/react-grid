# React by example: Display grid

>Display array data in grid.

## Previous steps:
1. [load data](/connectodata.md)
2. [file structure](/filestructure.md)


# 1. Display Grid

- data is loaded from the state in the grid using the array.map 
- 

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
           

                </tr> )}
                
            </tbody>
        </table>

   
```

