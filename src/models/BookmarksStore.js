import {observable, action, computed, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)

class BookmarksStore {
    @observable bookmarks = []
    @observable selectedItem = {}

    constructor (rootStore) {
        this.rootStore = rootStore
    }

    @computed
    get selectedId () {
        return this.selectedItem.id
    }

    @action setBookmarks = (bookmarks) => {
        this.bookmarks = [...bookmarks]
    }
    @action selectUser = (user) => {
        this.selectedItem = user
    }

    @action clearSelectedUser = () => {
        this.selectedItem = {}
    }

    @action
    getBookmarks () {
        axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
            this.setBookmarks(response.data)
        })
    }
}

export default BookmarksStore
