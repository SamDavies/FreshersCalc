var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Input = require('react-bootstrap/lib/Input');
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

const Login = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            error: false,
            email: null,
            password: null
        }
    },

    handleLogin() {
        const email = this.state.email;
        const pass = this.state.password;

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
                                    <Col xs={12}>
                                        <FormGroup controlId="email">
                                            <FormControl
                                                type="email"
                                                value={this.state.email}
                                                placeholder="Email Address"
                                                onChange={this.onEmailChange}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={12}>
                                        <FormGroup controlId="password">
                                            <FormControl
                                                type="password"
                                                value={this.state.password}
                                                placeholder="Password"
                                                onChange={this.onPasswordChange}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6}>
                                        <Button onClick={this.handleLogin} bsStyle="primary" id="login">
                                            Login
                                        </Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Link to="/web/register/" className="pull-right">Register?</Link>
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
        </div>
            ;
    }
});


module.exports = Login;