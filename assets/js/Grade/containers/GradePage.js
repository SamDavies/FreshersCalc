import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getStats} from "../actions/statsActions";
import {addUserCourse, deleteUserCourse, getUserCourses} from "../actions/userCourseActions";
import AddCourse from "../components/AddCourse";
import Banner from "../components/Banner";
import CourseList from "../components/CourseList";
import ScoreBar from "../components/ScoreBar";

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

// My Imports
var auth = require('../../auth');
var Nav = require('../../nav');

class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onDeleteUserCourse = this.onDeleteUserCourse.bind(this);
        this.onAddUserCourse = this.onAddUserCourse.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getStats());
        this.props.dispatch(getUserCourses());
    }

    onDeleteUserCourse(course) {
        this.props.dispatch(deleteUserCourse(course)).done(
            (data, status, request) => {
                this.componentDidMount()
            }
        );
    }
    
    onAddUserCourse(data) {
        this.props.dispatch(addUserCourse(data)).done(
            (data, status, request) => {
                this.componentDidMount()
            }
        );
    }

    render() {
        return <div>
            <Nav nav="courses"/>
            <Banner stats={this.props.stats}/>
            <ScoreBar stats={this.props.stats}/>
            <div className="container">
                <Row>
                    <Col sm={8} xs={12} smPush={4}>
                        <CourseList
                            courses={this.props.userCourses}
                            onDelete={this.onDeleteUserCourse}
                        />
                    </Col>
                    <Col sm={4} xs={12} smPull={8}>
                        <AddCourse onAddCourse={this.onAddUserCourse}/>
                    </Col>
                </Row>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        stats: state.statsReducer.stats,
        userCourses: state.userCourseReducer.userCourses
    }
};

export default connect(
    mapStateToProps
)(CoursePage);