var React = require('react');

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Panel = require('react-bootstrap/lib/Panel');

// My Imports
var auth = require('./auth');
var Nav = require('./nav');

const LogoutPage = React.createClass({
    componentDidMount() {
        auth.logout()
    },

    render() {
        return <div>
            <Nav/>
            <p>You are now logged out</p>
        </div>
    }
});

module.exports = LogoutPage;