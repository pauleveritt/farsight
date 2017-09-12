import React from 'react'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Provider} from 'mobx-react'

import App from './components/App'
import store from './models/index'

const history = createBrowserHistory()

const Root = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <App/>
            </Router>
        </MuiThemeProvider>
    </Provider>
)

export default Root
