import React, {Component, PropTypes} from "react";
import {Link, browserHistory} from "react-router";
import {connect} from "react-redux";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Breadcrumb = require('react-bootstrap/lib/Breadcrumb');

class BreadcrumbBar extends Component {
    constructor(props) {
        super(props);
        this.getActive = this.getActive.bind(this);
    }

    getActive(name) {
        return name == this.props.activeName
    }

    render() {
        return <div>
            <Breadcrumb>
                <Breadcrumb.Item id="budget-link" active={this.getActive("budget")}
                                 onClick={() => browserHistory.push('/web/budget/')}>
                    Your University
                </Breadcrumb.Item>
                <Breadcrumb.Item id="expenses-link" active={this.getActive("expenses")}
                                 onClick={() => browserHistory.push('/web/expenses/')}>
                    Personal Expenses
                </Breadcrumb.Item>
                <Breadcrumb.Item id="going-out-link" active={this.getActive("going-out")}
                                 onClick={() => browserHistory.push('/web/going-out/')}>
                    Going Out
                </Breadcrumb.Item>
                <Breadcrumb.Item id="results-link" active={this.getActive("results")}
                                 onClick={() => browserHistory.push('/web/results/')}>
                    Results
                </Breadcrumb.Item>
            </Breadcrumb>
            <Col xs={12}>
                <hr className="breadcrumb-hr"/>
            </Col>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(
    mapStateToProps
)(BreadcrumbBar);