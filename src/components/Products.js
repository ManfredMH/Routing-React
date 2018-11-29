import React,{Component} from 'react';
import Product from './Product';
import './css/products.css';
import Searcher from './Searcher';

export default class Products extends Component {

    render() {
        return (
            <div className="products">
                <h2>Products</h2>
                <Searcher searcher={this.props.searcherProduct} />
                <ul className="list-products">
                    {Object.keys(this.props.products).map(product => (
                        <Product key={product} info={this.props.products[product]} />
                    ))}
                </ul>
            </div>
        );
    }
}