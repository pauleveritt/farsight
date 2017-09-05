import React, {Component} from 'react';
import './App.css';
import ProductList from "./components/ProductList";

class App extends Component {
    render () {
        return (
            <div>
                <h1>My Product Store</h1>
                <ProductList/>
            </div>
        );
    }
}

export default App;
