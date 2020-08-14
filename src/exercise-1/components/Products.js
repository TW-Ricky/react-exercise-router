import React from 'react';
import Product from "./Product/Product";
import { BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import Date from '../../exercise-2/mockups/data.json';
import Item from 'antd/lib/list/Item';

export default class Products extends React.Component {
    state = {date : Date}
    render() {
        return <div>
            <h3>All Products</h3>
            <Router>
                {Object.keys(this.state.date).map(item => {
                    return <h3><NavLink to = {`/product/${item}`} >{item}</NavLink></h3>;
                })}
            </Router>
            <Switch>
                {Object.values(this.state.date).map(item => {
                    return <Route path = {`/product/${item.name}`} component = {Product}/>;
                })}
            </Switch>
            
        </div>
    }
}