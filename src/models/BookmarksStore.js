import {observable, action, useStrict} from 'mobx'
import axios from 'axios'
import {appConfig} from '../config'

useStrict(true)

class BookmarksStore {
    @observable bookmarks = []

    url = appConfig.API_SERVER + '/bookmark'

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
    deleteBookmark = (bookmarkId) => {
        // A real service will handle the id generation
        return axios.delete(this.url + '/' + bookmarkId)
            .catch(function (error) {
                console.log('Error deleting bookmark', error)
            })
    }


    @action
    getBookmarks () {
        axios.get(this.url)
            .then(response => {
                this.setBookmarks(response.data.objects)
            })
    }

    @action

    getBookmark (bookmarkId) {
        return axios.get(this.url + '/' + bookmarkId)
            .catch(response => console.log(
                'Failed to get bookmark: ' + bookmarkId
            ))
    }
}

export default BookmarksStore
