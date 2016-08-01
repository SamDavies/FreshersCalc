var React = require('react');
var Col = require('react-bootstrap/lib/Col');

const App = React.createClass({
    render() {
        return (<div>
                <div className="container no-padding">
                    <Col className="no-padding" xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
                        {this.props.children}
                    </Col>
                </div>
            </div>
        )
    }
});

module.exports = App;