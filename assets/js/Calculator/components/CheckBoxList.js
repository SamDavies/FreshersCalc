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
        } else {
            this.props.onSelectOption(optionId);
        }
    }

    render() {
        if (this.props.options) {
            var self = this;
            var options = this.props.options.map(function (option) {
                let checked = (self.props.selectedOptions.filter(id => (id == option.id)).length != 0);
                return <Col xs={self.props.innerCols} key={option.id}>
                    <label className="checkbox-inline" >
                        <input type="checkbox"
                               checked={checked}
                               onChange={self.onSelectOption.bind(self, option.id, checked)}
                        /> {option.name}
                    </label>
                </Col>;
            })
        }
        return <div>
            <Row>
                <Col xs={12}>
                    <h3 className="question">{this.props.header}</h3>
                </Col>
            </Row>
            <Row className="question-choices">
                <Col xs={this.props.outerCols} style={{padding: "0"}}>
                    {options}
                </Col>
            </Row>
        </div>;
    }
}

export default CheckBoxList