import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');

class SelectionList extends Component {
    constructor(props) {
        super(props);
        this.onSelectOption = this.onSelectOption.bind(this);
    }

    onSelectOption(e) {
        this.props.onSelectOption(e.target.value);
    }

    render() {
        if (this.props.options) {
            var self = this;
            var options = this.props.options.map(function (option) {
                var appendName = "";
                if (self.props.appendName) {
                    appendName = (option.id < 2) ? self.props.appendName : self.props.appendName + "s"
                }
                return <option key={option.id} value={option.id}>{option.name}{appendName}</option>
            })
        }

        let selectedOption = this.props.selectedOption ? this.props.selectedOption : this.props.placeholder;

        var header = "";
        if (this.props.header) {
            header = <Row>
                <Col xs={12}>
                    <h3 className="question">{this.props.header}</h3>
                </Col>
            </Row>
        }

        return <div>
            {header}

            <Col className="question-choices col-no-pad-left" xs={this.props.xsCols} sm={this.props.smCols}>
                <FormGroup controlId="select">
                    <FormControl
                        componentClass="select"
                        value={selectedOption}
                        onChange={this.onSelectOption}
                    >
                        <option disabled>{this.props.placeholder}</option>
                        {options}
                    </FormControl>
                </FormGroup>
            </Col>
        </div>
            ;
    }
}

export default SelectionList