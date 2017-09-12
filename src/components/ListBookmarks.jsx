import React from 'react'
import {Link,} from 'react-router-dom'
import {IconButton} from 'material-ui'
import Add from 'material-ui/svg-icons/content/add'
import Delete from 'material-ui/svg-icons/content/delete-sweep'

import {inject, observer} from 'mobx-react'
import {Col, Grid, Row} from 'react-flexbox-grid'

import {List, ListItem} from 'material-ui/List';
import {appConfig} from '../config'


@inject('store') @observer
class ListBookmarks extends React.Component {

    componentDidMount () {
        this.props.store.bookmarksStore.getBookmarks()
    }


    handleNavigate (item) {
        this.props.history.push({pathname: '/bookmark/' + item.id})
    }

    handleDelete (item) {
        const bookmarkId = item.id
        const store = this.props.store.bookmarksStore
        store.deleteBookmark(bookmarkId)
            .then(
                () => store.getBookmarks()
            )
    }

    render () {
        const styles = appConfig.BUTTON_STYLES
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <h1>List Bookmarks</h1>
                        </Col>
                        <Col md={2}>
                            <Link to="/bookmark/add">
                                <IconButton
                                    iconStyle={styles.mediumIcon}
                                    style={styles.medium}
                                >
                                    <Add/>
                                </IconButton>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <List>
                                {
                                    this.props.store.bookmarksStore.bookmarks.map(bookmark => (
                                        <ListItem
                                            key={bookmark.id}
                                            rightIconButton={
                                                <IconButton
                                                    onClick={() => this.handleDelete(bookmark)}>
                                                    <Delete/>
                                                </IconButton>}
                                            primaryText={bookmark.name}
                                            secondaryText="Jan 9, 2014"
                                            onClick={() => this.handleNavigate(bookmark)}
                                        />
                                    ))
                                }
                            </List>
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}


export default ListBookmarks
