import React, {Component, PropTypes} from "react";
import {RadioGroup, Radio} from "react-radio-group";

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
                return <Col className="no-padding" key={option.id}>
                    <label>
                        <Radio value={option.id}/><span className="choice-text">{option.name}</span>
                    </label>
                </Col>;
            });

            // separate the options into columns
            let rowsPerCol = Math.ceil(this.props.options.length * (self.props.innerCols / 12));
            let numCols = 12 / self.props.innerCols;
            var content = new Array(numCols);
            for (var i = 0; i < numCols; i++) {
                // get the portion of options for this column
                // making sure not to index options beyond the number of options
                let rows = options.slice(rowsPerCol * i, Math.min(rowsPerCol * (i + 1), this.props.options.length));
                content[i] = <Col xs={self.props.xsInnerCols} sm={self.props.innerCols} key={i}>
                    {rows}
                </Col>;
            }
        }
        return <div>
            <Row>
                <Col xs={12}>
                    <div className="question">{this.props.header}</div>
                </Col>
            </Row>
            <Row className="question-choices">
                <Col xs={this.props.outerCols} style={{padding: "0"}}>
                    <RadioGroup name={this.props.name} selectedValue={this.props.selectedOption}
                                onChange={this.onSelectOption}>
                        {content}
                    </RadioGroup>
                </Col>
            </Row>
        </div>;
    }
}

export default RadioGroupList