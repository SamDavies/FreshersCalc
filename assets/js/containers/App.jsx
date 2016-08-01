var React = require('react');

const App = React.createClass({
    render() {
        return (<div>
            <div className="container hidden-xs">
                {this.props.children}
            </div>
            <div className="container visible-xs no-padding">
                {this.props.children}
            </div>
        </div>
        )
    }
});

module.exports = App;