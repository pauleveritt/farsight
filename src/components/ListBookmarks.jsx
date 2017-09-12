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
         this.props.history.push({pathname: '/bookmarks/' + item.id})
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
                            <Link to="/bookmarks/add">
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
                                            rightIcon={<Delete/>}
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
                <Grid>
                    {
                        this.props.store.bookmarksStore.bookmarks.map(bookmark => (
                            <Row key={bookmark.id}>
                                <Col md={6}>
                                    <span>
                                        <Link to={{
                                            pathname: '/bookmarks',
                                            state: {bookmarkId: bookmark.id}
                                        }}>
                                        {bookmark.name}
                                        </Link>
                                        </span>
                                </Col>
                                <Col md={2}>
                                    <Link to="/bookmarks/add">
                                        <IconButton
                                            iconStyle={styles.smallIcon}
                                            style={styles.small}
                                        >
                                            <Delete/>
                                        </IconButton>
                                    </Link>
                                </Col>
                            </Row>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}


export default ListBookmarks
