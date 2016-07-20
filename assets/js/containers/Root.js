if (document.location.hostname != "127.0.0.1") {
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}
