import React, {Component, PropTypes} from "react";
import Course from "../components/Course";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');

class CourseList extends Component {
    render() {
        if (this.props.courses) {
            var self = this;
            var courseNodes = this.props.courses.map(function (course) {
                return <Course
                    key={course.id}
                    course={course}
                    onDelete={self.props.onDelete}
                />
            })
        }
        return <Col xs={12}>
            <Row>
                {courseNodes}
            </Row>
        </Col>;
    }
}

export default CourseList