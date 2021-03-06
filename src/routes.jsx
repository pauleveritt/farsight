import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import App from './components/App'
import Homepage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFound from './components/NotFound'
import AddBookmark from './components/AddBookmark';
import ListBookmarks from './components/ListBookmarks';
import ViewBookmark from './components/ViewBookmark'

const Routes = () => {
    return (
        <Switch path="/" component={App}>
            <Route exact path="/" component={Homepage}/>
            <Route path="/about" component={AboutPage}/>
            <Redirect from="/old-match" to="/about"/>
            <Route path="/bookmark/add"
                   component={AddBookmark}/>
            <Route path="/bookmark/:bookmarkId"
                   component={ViewBookmark}/>
            <Route exact path="/bookmark"
                   component={ListBookmarks}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
