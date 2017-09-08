import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Root from "./Root";

injectTapEventPlugin()

ReactDOM.render(<Root/>, document.getElementById('root'))
registerServiceWorker()
