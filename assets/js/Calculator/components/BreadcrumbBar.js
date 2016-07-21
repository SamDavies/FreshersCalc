import React, {Component, PropTypes} from "react";

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
        return <Breadcrumb>
            <Breadcrumb.Item active={this.getActive("university")} href="#">
                Your University
            </Breadcrumb.Item>
            <Breadcrumb.Item active={this.getActive("expenses")} href="#">
                Personal Expenses
            </Breadcrumb.Item>
            <Breadcrumb.Item active={this.getActive("going-out")} href="#">
                Going Out
            </Breadcrumb.Item>
            <Breadcrumb.Item active={this.getActive("results")} href="#">
                Results
            </Breadcrumb.Item>
        </Breadcrumb>;
    }
}

export default BreadcrumbBar