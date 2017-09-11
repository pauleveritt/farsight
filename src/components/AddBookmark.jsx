import React from 'react'
import {RaisedButton, TextField} from 'material-ui'
import {inject, observer} from 'mobx-react'

@inject('store') @observer
class AddBookmark extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            currentUrl: 'http://dummy.url.com',
            name: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleSubmit.bind(this)
    }

    componentDidMount () {

        // When in the Chrome extension, use the API to get the
        // value of the current tab's URL

        // eslint-disable-next-line no-undef
        if (typeof chrome !== 'undefined') {
            // We are in a Chrome extension
            // eslint-disable-next-line no-undef
            if (chrome.tabs) {
                // eslint-disable-next-line no-undef
                chrome.tabs.query({
                    active: true,
                    currentWindow: true
                }, (arrayOfTabs) => {
                    const activeTab = arrayOfTabs[0]
                    this.setState({currentUrl: activeTab.url})
                });
            }
        }
    }

    handleChange (event) {
        const targetName = event.target.name
        const targetValue = event.target.value
        this.setState({[targetName]: targetValue});
    }

    handleSubmit (event) {
        event.preventDefault();
        const currentUrl = this.state.currentUrl
        const name = this.state.name
        const store = this.props.store

        store.bookmarksStore.addBookmark(
            {name: name, url: currentUrl})
            .then(() => this.props.history.push({pathname: '/bookmarks'}))
    }

    handleCancel (event) {
        event.preventDefault()
        this.setState({name: ''})
        this.props.history.push({pathname: '/bookmarks'})
    }

    render () {
        const currentUrl = this.state.currentUrl
        const name = this.state.name

        const buttonStyle = {
            marginRight: '0.5em'
        }

        return (
            <div>
                <h1>Add Bookmark</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            name="currentUrl"
                            hintText="URL..."
                            value={currentUrl}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            name="name"
                            hintText="Name..."
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <RaisedButton label="Add" primary={true}
                                      onClick={this.handleSubmit}
                                      style={buttonStyle}/>
                        <RaisedButton label="Cancel" secondary={true}
                                      style={buttonStyle}
                                      onClick={this.handleCancel}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddBookmark
