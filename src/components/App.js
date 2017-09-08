import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import './App.css';
import ProductList from "./ProductList";


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {Grid, Row, Col} from 'react-flexbox-grid'

const Home = () => (
    <div>
        <h2>Home</h2>
        <Grid fluid>
            <Row>
                <Col xs={6} md={3}>
                    Hello, world!
                </Col>
                <Col xs={6} md={3}>
                    Hello, world!
                </Col>
            </Row>
        </Grid>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
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
            <MuiThemeProvider>
                <Router>
                    <div>
                        <div className="App">
                            <div>
                                <h2>Welcome to React</h2>
                            </div>
                            <p>
                                To get started, edit <code>src/App.js</code>
                                and save to reload.
                            </p>
                            <RaisedButton label="Material UI"/>
                        </div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topics">Products</Link></li>
                            <li><Link to="/old-match">Old Match, to be
                                redirected</Link></li>
                            <li><Link to="/will-not-match">Will Not
                                Match</Link>
                            </li>
                        </ul>
                        <hr/>

                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Redirect from="/old-match" to="/about"/>
                            <Route path="/topics" component={ProductStore}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
