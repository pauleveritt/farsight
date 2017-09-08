import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import {Provider} from 'mobx-react'

import './App.css';
import store from '../models/index'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ListBookmarks from "./ListBookmarks";

const NoMatch = ({location}) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

class App extends Component {
    render () {
        return (
            <Provider store={store}>
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
                                       component={ListBookmarks}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </div>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
