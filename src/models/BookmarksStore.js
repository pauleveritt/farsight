import {observable, action, useStrict} from 'mobx'
import axios from 'axios'
import {appConfig} from '../config'

useStrict(true)

class BookmarksStore {
    @observable bookmarks = []

    url = appConfig.API_SERVER + '/bookmarks'

    constructor (rootStore) {
        this.rootStore = rootStore
    }


    @action
    setBookmarks = (bookmarks) => {
        this.bookmarks = [...bookmarks]
    }

    @action
    addBookmark = (newBookmark) => {
        // A real service will handle the id generation
        newBookmark.id = Math.floor(Math.random() * 1000000)
        return axios.post(this.url, newBookmark)
            .catch(function (error) {
                console.log('Error posting addBookmark', error)
            })
    }


    @action
    getBookmarks () {
        axios.get(this.url)
            .then(response => {
                this.setBookmarks(response.data)
            })
    }
}

export default BookmarksStore
