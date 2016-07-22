import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Calculator from "../containers/Calculator";
import BreadcrumbBar from "../components/BreadcrumbBar";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');


class ResultsPage extends Component {
    constructor(props) {
        super(props);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>

                    <BreadcrumbBar activeName="results"/>

                    <Calculator/>
                </Col>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
    }
};

export default connect(
    mapStateToProps
)(ResultsPage);