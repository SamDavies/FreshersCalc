import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');

class MoneyInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value.replace('£', ''));
    }

    render() {
        return <Col xs={12}>
            <Row>
                <FormGroup controlId={this.props.controlId}>
                    <FormControl
                        type="text"
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        onChange={this.onChange}
                    />
                </FormGroup>
            </Row>
        </Col>;
    }
}

export default MoneyInput