import React from 'react';

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import {Provider} from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.css';
import store from '../models/index'


import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ListBookmarks from "./ListBookmarks";
import AddBookmark from "./AddBookmark";
import NotFound from "./NotFound";
import NavHeader from "./NavHeader";

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <div>
                    <NavHeader/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Redirect from="/old-match" to="/about"/>
                        <Route path="/bookmarks/add"
                               component={AddBookmark}/>
                        <Route path="/bookmarks"
                               component={ListBookmarks}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>
)

export default App
