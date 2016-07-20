var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Panel = require('react-bootstrap/lib/Panel');
var Alert = require('react-bootstrap/lib/Alert');
var Badge = require('react-bootstrap/lib/Badge');

// My Imports
var Nav = require('./nav');

const PaperView = React.createClass({
    render: function () {
        return <div>
            <Nav nav="about"/>
            <Row style={{marginBottom: 2 + "em"}}/>
            <div className="container">
                <Col sm={2}>
                    <h5>Machine Learning 2012</h5>
                    <hr/>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>1a) What is the root...</a></div>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>1b) What is the root...</a></div>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>1c) What is the root...</a></div>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>1d) What is the root...</a></div>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>2) What is the root...</a></div>
                    <div style={{paddingBottom: 1.0 + "em"}}><a>3) What is the root...</a></div>

                </Col>
                <Col sm={8}>
                    <Badge style={{marginRight: 0.2 + "em"}}>Machine Learning</Badge>
                    <Badge style={{marginRight: 0.2 + "em"}}>Neural Networks</Badge>
                    <h3>1a) What is the square root...</h3>
                    <h5>100+ answers</h5>
                    <hr/>
                </Col>
                <Col sm={2}>
                    <h5>Related Papers</h5>
                    <hr/>
                </Col>
            </div>
        </div>
            ;
    }
});

module.exports = PaperView;