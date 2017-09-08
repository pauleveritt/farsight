import React from 'react'
import {Link,} from 'react-router-dom'

import {inject, observer} from 'mobx-react'


@inject('store') @observer
class ListBookmarks extends React.Component {
    
    componentDidMount () {
        this.props.store.bookmarksStore.getBookmarks()
    }


    render () {
        return (
            <div>
                <h1>List Bookmarks</h1>
                <p>
                    <Link to="/bookmarks/add">Add Bookmark</Link>
                </p>
                <ul>
                    {
                        this.props.store.bookmarksStore.bookmarks.map(bookmark => (
                            <li key={bookmark.id}>{bookmark.name}</li>
                        ))
                    }
                </ul>

            </div>
        )
    }
}


export default ListBookmarks
