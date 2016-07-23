import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Calculator from "../containers/Calculator";
import BreadcrumbBar from "../components/BreadcrumbBar";
import {Link, browserHistory} from "react-router";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');


class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.openFacebookShare = this.openFacebookShare.bind(this);
    }

    openFacebookShare() {
        window.open("https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2" +
            "Ffreshers-calc.herokuapp.com%2Fweb%2Fexpenses%2F&picture=http%3A%2F%2Fwww.insert-image" +
            "-share-url-here.jpg&name=Freshers%20Calculator%20by%20the%20Tab&caption=%20&descriptio" +
            "n=I%20will%20overspent%20by%20%C2%A3200%20at%20Freshers.&redirect_uri=http%3A%2F%2Fwww" +
            ".facebook.com%2F")
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
                    <Panel>

                        <BreadcrumbBar activeName="results"/>

                        <Calculator/>

                        <Col xs={12}>
                            <Button bsStyle="link" onClick={this.openFacebookShare}>
                                Share with your facebook friends
                            </Button>
                        </Col>
                    </Panel>
                </Col>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {}
};

export default connect(
    mapStateToProps
)(ResultsPage);