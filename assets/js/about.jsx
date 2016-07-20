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

// My Imports
var Nav = require('./nav');

const Banner = React.createClass({
    render: function () {
        return <div className="bs-docs-header" id="content">
            <div className="container">
                <h1>Welcome to GradeHub</h1>
                <h2>The most awesome grade calculator.</h2>
            </div>
        </div>;
    }
});

const AboutView = React.createClass({
    render: function () {
        return <div>
            <Nav nav="about"/>
            <Banner/>
            <div className="container">
                <Alert bsStyle="warning">
                    This tool <strong>GradeHub</strong> helps to:
                    <ul>
                        <li>Calculate your average score at Uni.</li>
                        <li>Calculate how much of the year you have completed.</li>
                        <li>Calculate what average you need to get an A or a B.</li>
                    </ul>
                </Alert>
                <Alert bsStyle="danger">
                    The project is under active development, and the website will change often.
                </Alert>
            </div>
        </div>
            ;
    }
});

module.exports = AboutView;