export const appConfig = {
    // dev mode to mock async data for instance
    DEV_MODE: true,
    // When you need some kind "console spam" to debug
    DEBUG_ENABLED: true,
    // fake delay to mock async
    FAKE_ASYNC_DELAY: 1000,

    APP_NAME: 'Farsight',

    DRAWER: {
        menus: [
            {id: 1, title: 'Home', routeName: '/'},
            {id: 2, title: 'About', routeName: '/about'},
            {id: 3, title: 'Bookmarks', routeName: '/bookmarks'}
        ]
    },

    API_SERVER: 'http://localhost:3001',

    BUTTON_STYLES: {
        smallIcon: {
            width: 24,
            height: 24,
        },
        mediumIcon: {
            width: 48,
            height: 48,
        },
        largeIcon: {
            width: 60,
            height: 60,
        },
        small: {
            width: 48,
            height: 48,
            padding: 8,
        },
        medium: {
            width: 96,
            height: 96,
            padding: 24,
        },
        large: {
            width: 120,
            height: 120,
            padding: 30,
        },
    }

}