var React = require('react');

const App = React.createClass({
    render() {
        return (
            <div>
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
            </div>
        )
    }
});

module.exports = App;