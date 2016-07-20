if (document.location.hostname != "127.0.0.1") {
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
