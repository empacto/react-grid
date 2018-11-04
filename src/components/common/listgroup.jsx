import React, { Component } from 'react';

const Listgroup = props => {

    const {items, onItemSelect,selectedItem} = props;

    return <ul className="list-group">
 
 {items.map(item => <li 
 onClick={() => onItemSelect(item)}
 key={item._id} 
 style={{cursor:'pointer'}}
 className={ item === selectedItem?"list-group-item active":"list-group-item"}
 > 
 {item.name}</li> )}
    </ul>

}
 
export default Listgroup;