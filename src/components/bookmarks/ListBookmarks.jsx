import React from 'react'
import PropTypes from 'prop-types'

class Bookmarks extends React.Component {
    render () {
        return (
            <div>Bookmarks</div>
        )
    }
}
Bookmarks.propTypes = {
    products: PropTypes.array.isRequired,
    onProductSelect: PropTypes.func.isRequired
}


export default Bookmarks
