import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');
var Panel = require('react-bootstrap/lib/Panel');
var ProgressBar = require('react-bootstrap/lib/ProgressBar');
var Well = require('react-bootstrap/lib/Well');

var auth = require('../../auth');

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            completed: null,
            scored: null,
            credits: null
        };
        this.handleAddUserCourse = this.handleAddUserCourse.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompletedChange = this.onCompletedChange.bind(this);
        this.onScoredChange = this.onScoredChange.bind(this);
        this.onCreditsChange = this.onCreditsChange.bind(this);
    }

    handleAddUserCourse() {
        var data = {
            'name': this.state.name,
            'completed': this.state.completed.replace('%', '') / 100.0,
            'scored': this.state.scored.replace('%', '') / 100.0,
            'credits': this.state.credits
        };
        this.props.onAddCourse(data);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onCompletedChange(e) {
        this.setState({
            completed: e.target.value
        });
    }

    onScoredChange(e) {
        this.setState({
            scored: e.target.value
        });
    }

    onCreditsChange(e) {
        this.setState({
            credits: e.target.value
        });
    }

    render() {
        return <Col sm={12}>
            <Well>
                <form>
                    <FormGroup controlId="courseName">
                        <FormControl
                            type="text"
                            value={this.state.url}
                            placeholder="Course Name e.g. Machine Learning"
                            onChange={this.onNameChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="percentageComplete">
                        <FormControl
                            type="text"
                            value={this.state.url}
                            placeholder="Percentage Completed e.g. 12.5"
                            onChange={this.onCompletedChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="percentageScore">
                        <FormControl
                            type="text"
                            value={this.state.url}
                            placeholder="Current Score e.g. 60"
                            onChange={this.onScoredChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="credits">
                        <FormControl
                            type="text"
                            value={this.state.url}
                            placeholder="Credits e.g. 10"
                            onChange={this.onCreditsChange}
                        />
                    </FormGroup>
                    <Button onClick={this.handleAddUserCourse} bsStyle="primary">Add Course</Button>
                </form>
            </Well>
        </Col>;
    }
}

// AddCourse.propTypes = {
//     addCourse: PropTypes.func.isRequired
// };

export default AddCourse