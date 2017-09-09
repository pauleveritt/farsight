import React from 'react'
import {TextField} from 'material-ui'
import {inject, observer} from 'mobx-react'

@inject('store') @observer
class AddBookmark extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            currentUrl: 'http://dummy.url.com'
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({currentUrl: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
        const currentUrl = this.state.currentUrl
        const store = this.props.store
        console.log(currentUrl, store)
    }

    render () {
        const currentUrl = this.state.currentUrl

        return (
            <div>
                <h1>Add Bookmark</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="URL..."
                        value={currentUrl}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}


export default AddBookmark
