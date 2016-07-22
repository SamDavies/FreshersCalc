import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');

/*
 * This component allows multiple option to be selected
 */
class CheckBoxList extends Component {
    constructor(props) {
        super(props);
        this.onSelectOption = this.onSelectOption.bind(this);
    }

    onSelectOption(optionId, checked, e) {
        if (checked) {
            this.props.onDeselectOption(optionId);
            console.log("deselecting")
        } else {
            this.props.onSelectOption(optionId);
            console.log("selecting")
        }
    }

    render() {
        if (this.props.options) {
            var self = this;
            var options = this.props.options.map(function (option) {
                let checked = (self.props.selectedOptions.filter(id => (id == option.id)).length != 0);
                return <label className="checkbox-inline" key={option.id}>
                    <input type="checkbox"
                           checked={checked}
                           onChange={self.onSelectOption.bind(self, option.id, checked)}
                    /> {option.name}
                </label>;
            })
        }
        return <Col xs={12}>
            {options}
        </Col>;
    }
}

export default CheckBoxList