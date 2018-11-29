import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Navegation from "./Navegation";
import Products from './Products';
import About from './About';
import SingleProduct from './SingleProduct';
import Contact from './Contact';
import Error from "./Error";
import infoProducts from "../data/data.json";

export default class Router extends Component {

    state = {
        products: [],
        searcherTerm: ''
    }

    componentWillMount(){
        this.setState({
            products: infoProducts
        });
    }

    searcherProduct = (searcher) => {
        if(searcher.length > 2){
            this.setState({
                searcherTerm: searcher
            });
        } else {
            this.setState({
                searcherTerm: ''
            });
        }
    }

    render() {

        let products = [...this.state.products];
        let searcher = this.state.searcherTerm;
        let result;

        if(searcher !== ''){
            result = products.filter(product => (
                product.name.toLowerCase().indexOf(searcher.toLowerCase()) !== -1
            ));
        } else {
            result = products;
        }

        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Navegation />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Products products={result} searcherProduct={this.searcherProduct} />
                        )} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" render={() => (
                            <Products products={result} searcherProduct={this.searcherProduct}/>
                        )} />
                        <Route exact path="/product/:productId" render={(props) => {

                            let idProduct = props.location.pathname.replace('/product/', '');
                            return(
                                <SingleProduct product={this.state.products[idProduct]} />
                            );
                        }} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}