import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import ProductList from "./ProductList";


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)


class ProductStore extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedProducts: [],
            products: [
                {id: 1, name: 'AirMax 90', brand: 'Nike'},
                {id: 2, name: 'Yeezy', brand: 'Adidas'},
                {id: 3, name: 'Classic', brand: 'Reebok'},
            ]
        }
    }

    handleProductSelect (product) {
        this.setState(prevState => {
            return {
                selectedProducts: prevState.selectedProducts.concat(product)
            }
        });
    }


    render () {
        return (
            <div>
                <h1>My Product Store</h1>
                <p>You have selected {this.state.selectedProducts.length}
                    product(s).</p>
                <ProductList
                    products={this.state.products}
                    onProductSelect={this.handleProductSelect.bind(this)}
                />
            </div>
        )
    }
}

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedProducts: [],
            products: [
                {id: 1, name: 'AirMax 90', brand: 'Nike'},
                {id: 2, name: 'Yeezy', brand: 'Adidas'},
                {id: 3, name: 'Classic', brand: 'Reebok'},
            ]
        }
    }

    handleProductSelect (product) {
        this.setState(prevState => {
            return {
                selectedProducts: prevState.selectedProducts.concat(product)
            }
        });
    }


    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Products</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={ProductStore}/>
                </div>
            </Router>
        );
    }
}

export default App;
