import React from 'react'

import {inject, observer} from 'mobx-react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {Link} from 'react-router-dom'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import {appConfig as styles} from '../config'
import {IconButton} from 'material-ui'


@inject('store') @observer
class ViewBookmark extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            bookmark: {}
        }
    }


    componentDidMount () {
        this.props.store.bookmarksStore.getBookmark(1)
            .then(response => this.setState({bookmark: response.data}))
    }


    render () {
        const bookmark = this.state.bookmark

        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <h1>
                                <Link to="/bookmarks">
                                    <IconButton
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}
                                    >
                                        <ArrowBack/>
                                    </IconButton>
                                </Link>
                                View Bookmark <code>{bookmark.id}</code>
                            </h1>
                            <p>url: {bookmark.url}</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default ViewBookmark
