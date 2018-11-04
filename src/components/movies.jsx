import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import PropTypes from 'prop-types';
import Listgroup from  './common/listgroup';
import {getGenres} from '../data/fakeGenreService';

class Movies extends Component {
    state = { 
        movies :[],
        currentPage:1,
        genres:[],
        pageSize: 4      
           };

           componentDidMount()
           {
               const genres =[{name:"All movies"},...getGenres()];
               this.setState({movies:getMovies(),genres});
           }

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
           handleGenreSelect = genre => {
            console.log(genre);
            this.setState({selectedGenre:genre, currentPage:1});
           };

           

    render() {  
        const {length:count} = this.state.movies; 
        const {pageSize,currentPage,selectedGenre,movies:allMovies} = this.state;
  
        if(count === 0)return <p> "there are no movies in the database"</p>

        const filtered = selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

        const movies = paginate(filtered,currentPage,pageSize);
             
        return ( 
        <div className="row">
        <div className="col-2">
    
        <Listgroup
         items={this.state.genres}
         selectedItem={this.state.selectedGenre}
         onItemSelect={this.handleGenreSelect}>
          </Listgroup>

        </div>
        <div className="col">
        <p>showing {filtered.length} movies in the database</p>
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
        itemsCount={filtered.length}
        pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={this.handlePageChange}>
        </Pagination>
        </div>
         
 
        </div>
        
);
   
    };
   
};

    Pagination.propTypes = {
        itemsCount : PropTypes.number.isRequired,
        pageSize : PropTypes.number.isRequired,
        currentPage : PropTypes.number.isRequired,
        onPageChange : PropTypes.func.isRequired
    };
    
export default Movies;