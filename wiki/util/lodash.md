# React by examples: Install lodash

>Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions



# 1.  Lodash installation:

- Ctrl + ' => terminal shell : 


```sh
npm i lodash@4.17.1

}
``` 
- import lodash reference into the page :
- reference lodash _. 
 
```sh
import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = props => {

 const {itemsCount, pageSize} = props;

 const pagesCount = itemsCount / pageSize;
const pages = _.range(1,pagesCount + 1);

```