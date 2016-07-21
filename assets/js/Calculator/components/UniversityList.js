import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');

class UniversityList extends Component {
    onSelectUniversity(e) {
        this.props.onSelectUniversity(e.target.value);
    }

    render() {
        if (this.props.universities) {
            var self = this;
            var options = this.props.universities.map(function (university) {
                return <option key={university.id} value={university.id}>{university.name}</option>
            })
        }
        return <Col xs={12}>
            <Row>
                <FormGroup controlId="year">
                    <FormControl
                        componentClass="select"
                        value={this.props.selectedUniversity}
                        onChange={this.onSelectUniversity}
                    >
                        {options}
                    </FormControl>
                </FormGroup>
            </Row>
        </Col>;
    }
}

export default UniversityList