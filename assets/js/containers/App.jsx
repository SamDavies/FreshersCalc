var React = require('react');
var Col = require('react-bootstrap/lib/Col');

const App = React.createClass({
    render() {
        return (
            <div className="container no-padding" style={{width: "100%"}}>
                <Col className="no-padding" xs={12} sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                    {this.props.children}
                </Col>
            </div>
        )
    }
});

module.exports = App;