var React = require('react');
var Link = require('react-router').Link;

// My Imports
var auth = require('./auth');

const Nav = React.createClass({
    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        }
    },

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        })
    },

    componentWillMount() {
        auth.onChange = this.updateAuth;
        auth.login()
    },

    render() {
        return (
            <div>
                <header role="banner" className="bs-docs-nav navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="#">GradeHub</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className={this.props.nav == "courses" ? ("active") : ("")}><a href="/web/dashboard/">My Courses</a></li>
                                <li className={this.props.nav == "about" ? ("active") : ("")}><a href="/web/about/">About</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className={this.props.nav == "login" ? ("active") : ("")}>{this.state.loggedIn ? (
                                    <Link to="/web/logout/">Log out</Link>
                                ) : (<Link to="/web/login/">Sign in</Link>
                                )}</li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
});

module.exports = Nav;