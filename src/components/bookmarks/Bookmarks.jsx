import React from 'react'
import PropTypes from 'prop-types'

class Bookmarks extends React.Component {
    render () {
        return (
            <div>
                <h1>Bookmarks</h1>
                <p>List Bookmarks</p>
                <ul>
                    {
                        this.props.products.map(product => (
                            <li key={product.id}
                                onClick={() => this.props.onProductSelect(product)}>
                                {product.name} {product.brand}
                            </li>
                        ))
                    }
                </ul>

            </div>
        )
    }
}

Bookmarks.propTypes = {
    products: PropTypes.array.isRequired,
    onProductSelect: PropTypes.func.isRequired
}


export default Bookmarks
