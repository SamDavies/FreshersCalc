import React, {Component, PropTypes} from "react";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');

class Course extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    handleDeleteCourse() {
        this.props.onDelete(this.props.course);
    }

    render() {
        return <Col md={3} sm={4}>
            <div className="course-title" style={{whiteSpace: 'nowrap'}}><h5>{this.props.course.name}</h5></div>
            <div>{this.props.course.credits} credits.</div>
            <div>{(this.props.course.completed * 100).toFixed(1)}% complete.</div>
            <div>{(this.props.course.scored * 100).toFixed(1)}% scored.
                <div onClick={this.handleDeleteCourse} className="close">&times;</div>
            </div>
            <hr/>
        </Col>;
    }
}

export default Course