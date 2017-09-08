import {useStrict} from 'mobx'
import BookmarksStore from "./BookmarksStore"

useStrict(true)


class RootStore {
    constructor () {
        this.bookmarksStore = new BookmarksStore(this)
    }
}

const store = new RootStore()

export default store
