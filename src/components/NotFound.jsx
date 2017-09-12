import React from 'react'

const NotFound = (props) => {
    const location = props.location
    const history = props.history

    if (location.pathname === '/index.html') {
        // Looks like we're in the Chrome extension, let's redirect to
        // the "right" place. Add Bookmark for now.
        history.push('/bookmarks/add')
    }
    return (
        <div>
            <h1>Not Found</h1>
            <p>No match for <code>{location.pathname}</code></p>
        </div>
    )
}

export default NotFound