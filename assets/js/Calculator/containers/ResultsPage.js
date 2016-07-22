import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Calculator from "../containers/Calculator";
import BreadcrumbBar from "../components/BreadcrumbBar";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');


class ResultsPage extends Component {
    constructor(props) {
        super(props);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
                    <Panel>

                        <BreadcrumbBar activeName="results"/>

                        <Calculator/>
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