# React by example: Add type checking

>Add react type checking to avoid errors. An error is generated if the wrong type is used

## Previous steps:
1. [load data](/connectodata.md)
2. [file structure](/filestructure.md)
3. [Display array in Grid](/displayGrid.md)
4. [Delete row button](/deletrow.md)
5. [Add checkbox - like button](/AddLike.md)
6. [Add pagination ](/Paginate.md)

# 1. Install React prop-types:

- ctrl + ' = activate shell
- installing this react library is necessary to enable react type checking

```sh
npm i prop-types@15.6.2

```
-reference propTypes in movies.jsx
```sh
import React, { Component } from 'react';
import {getMovies} from '../data/fakeMovieService';
import Like from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';
import PropTypes from 'prop-types';

```
# 2. Inculde propTypes:

- right before export in the movies.jsx
- define the propType for each property within the Pagination component.

```sh
 Pagination.propTypes = {
    itemsCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired,
    onPageChange : PropTypes.func.isRequired
   };
 
export default Movies;


``` 

 

