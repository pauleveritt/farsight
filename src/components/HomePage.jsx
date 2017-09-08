import React from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {RaisedButton} from 'material-ui';

class Homepage extends React.Component {
    render () {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={3}>
                        Hello, world!
                    </Col>
                    <Col xs={6} md={3}>
                        Hello, world!
                        <RaisedButton label="Material UI"/>
                    </Col>
                </Row>
            </Grid>        )
    }
}


export default Homepage
