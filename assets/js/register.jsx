var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');
var Panel = require('react-bootstrap/lib/Panel');

// My Imports
var auth = require('./auth');
var Nav = require('./nav');

const Banner = React.createClass({
    render: function () {
        return <div className="bs-docs-header" id="content">
            <div className="container">
                <h1>Login Page</h1>
            </div>
        </div>;
    }
});

const Register = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            error: false,
            firstName: null,
            lastName: null,
            email: null,
            password: null
        }
    },

    handleRegister() {
        let email = this.state.email;
        let pass = this.state.password;

        var data = {
            'email': email,
            'password': pass,
            'first_name': this.state.firstName,
            'last_name': this.state.lastName
        };

        var promise = $.ajax({
            type: "POST",
            url: "/api/register/",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });

        promise.done((data, status, request) => {
            auth.login(email, pass, (loggedIn) => {
                if (!loggedIn)
                    return this.setState({error: true});

                const {location} = this.props;

                if (location.state && location.state.nextPathname) {
                    this.context.router.replace(location.state.nextPathname)
                } else {
                    this.context.router.replace('/')
                }
            })
        });
    },

    onFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        });
    },

    onLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        });
    },

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    },

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    },

    render: function () {
        return <div>
            <Nav nav="login"/>
            <Banner/>
            <div className="container">
                <Row className="centered-form">
                    <Col xs={12} sm={8} md={4} smOffset={2} mdOffset={4}>
                        <Panel header="Its Encrypted and all that Jazz">
                            <form>
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup controlId="firstName">
                                            <FormControl
                                                type="text"
                                                value={this.state.firstName}
                                                placeholder="First Name"
                                                onChange={this.onFirstNameChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <FormGroup controlId="lastName">
                                            <FormControl
                                                type="text"
                                                value={this.state.lastName}
                                                placeholder="Last Name"
                                                onChange={this.onLastNameChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup controlId="email">
                                            <FormControl
                                                type="text"
                                                value={this.state.email}
                                                placeholder="Email Address"
                                                onChange={this.onEmailChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={12}>
                                        <FormGroup controlId="password">
                                            <FormControl
                                                type="text"
                                                value={this.state.password}
                                                placeholder="Password"
                                                onChange={this.onPasswordChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={this.handleRegister} bsStyle="primary" id="register">
                                            Register
                                        </Button>
                                    </Col>

                                    <Col xs={6}>
                                        <Link to="/web/login/" className="pull-right">Login?</Link>
                                    </Col>
                                    {this.state.error && (
                                        <p>Bad login information</p>
                                    )}
                                </Row>
                            </form>
                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>;
    }
});

module.exports = Register;