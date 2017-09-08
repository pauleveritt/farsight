import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import './App.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ListBookmarks from "./bookmarks/ListBookmarks";
import Bookmarks from "./bookmarks/Bookmarks";

const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

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
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/bookmarks">Bookmarks</Link></li>
                            <li><Link to="/old-match">Old Match, to be
                                redirected</Link></li>
                            <li><Link to="/will-not-match">Will Not
                                Match</Link>
                            </li>
                        </ul>
                        <hr/>

                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Redirect from="/old-match" to="/about"/>
                            <Route path="/bookmarks"
                                   render={(props) => (
                                       <Bookmarks {...props}
                                                  products={this.state.products}
                                                  onProductSelect={this.handleProductSelect.bind(this)}
                                       />
                                   )}
                            />
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
