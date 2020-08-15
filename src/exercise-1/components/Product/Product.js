import React from 'react';
import Data from '../../../exercise-2/mockups/data.json';

const getById = (id) => {
    return Object.values(Data).find(item => item.id === id);
}

class Product extends React.Component {
    
    render() {
        const productid = Number(this.props.match.params.id);
        const location = this.props.location;
        const { id, name, price, quantity, desc} = getById(productid);
        return (
            <div>
                <h3>Product Details:</h3>
                <h4>Name:{name}</h4>
                <h4>Id:{id}</h4>
                <h4>Price:{price}</h4>
                <h4>Quanatity:{quantity}</h4>
                <h4>Desc:{desc}</h4>
                <h4>URL:{location.pathname}</h4>
            </div>
        )
    }
    
    
    
}

export default Product;