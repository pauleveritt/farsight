import React from 'react'

class Bookmarks extends React.Component {

    state = {
        currentUrl: 'http://dummy.url.com'
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
                    this.setState({currentUrl:activeTab.url})
                });
            }
        }
    }

    render () {
        const currentUrl = this.state.currentUrl

        return (
            <div>
                <h1>Add Bookmark</h1>
                <p>URL: {currentUrl}</p>

            </div>
        )
    }
}


export default Bookmarks
