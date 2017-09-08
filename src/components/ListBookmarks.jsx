import React from 'react'
import {observer, inject} from 'mobx-react'


@inject('store') @observer
class ListBookmarks extends React.Component {
    
    componentDidMount () {
        this.props.store.bookmarksStore.getBookmarks()
    }


    render () {
        return (
            <div>
                <h1>List Bookmarks</h1>
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
