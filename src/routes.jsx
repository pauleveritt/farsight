import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './components/App'
import Homepage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import NotFound from "./components/NotFound"

const Routes = () => {
    return (
        <Switch path="/" component={App}>
            <Route exact path="/" component={Homepage}/>
            <Route path="/about" component={AboutPage}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
