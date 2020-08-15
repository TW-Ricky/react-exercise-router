import React from 'react';
import { NavLink} from 'react-router-dom';
import Date from '../../exercise-2/mockups/data.json';

export default class Products extends React.Component {

    render() {
        return <div>
            <h3>All Products</h3>
            {Object.values(Date).map(item => {
                return <h3><NavLink to = {`/products/${item.id}`} >{item.name}</NavLink></h3>;
            })}
        </div>
    }
}