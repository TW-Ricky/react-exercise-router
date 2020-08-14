import React from 'react';

export default class Product extends React.Component {
    render() {
        return <div>
            <h3>Product Details:</h3>
            <h4>Name:{this.props.data.name}</h4>
            <h4>Name:{this.props.data.name}</h4>
            <h4>Name:{this.props.data.name}</h4>
            <h4>Name:{this.props.data.name}</h4>
            <h4>Name:{this.props.data.name}</h4>
            <h4>Name:{this.props.data.name}</h4>
        </div>
    }
}