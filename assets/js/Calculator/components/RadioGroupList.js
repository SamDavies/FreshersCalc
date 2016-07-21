import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');

import {RadioGroup, Radio} from 'react-radio-group'

class RadioGroupList extends Component {
    constructor(props) {
        super(props);
        this.onSelectOption = this.onSelectOption.bind(this);
    }

    onSelectOption(value) {
        this.props.onSelectOption(value);
    }

    render() {
        if (this.props.options) {
            var self = this;
            var options = this.props.options.map(function (option) {
                return <label key={option.id}>
                    <Radio value={option.id}/>{option.name}
                </label>;
            })
        }
        return <Col xs={12}>
            <Row>
                <RadioGroup name={this.props.name} selectedValue={this.props.selectedOption} onChange={this.onSelectOption}>
                    {options}
                </RadioGroup>
            </Row>
        </Col>;
    }
}

export default RadioGroupList