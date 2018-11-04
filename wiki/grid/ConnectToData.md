# React by example: loading local datasource
> loading data (array) from a local file 


# 1. Method in the local data file:
The getMovies() method returns the movie array, located in the fakemeMovieService.js
 
```sh
export function getMovies() {
  return movies;
}

```




# 2. Referencing the Load file :
- Loading the Movies array by referencing the getMovies() method in the fakeMovieService.js file.
- The  getMovies() method is loaded in the state.

```sh
import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';

class Movies extends Component {
    state = { 
        movies : getMovies()
      
           };

    render() { 

```
