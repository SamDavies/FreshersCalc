var React = require('react');

// Bootstrap Imports
var Panel = require('react-bootstrap/lib/Panel');
var Link = require('react-router').Link;
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var ProgressBar = require('react-bootstrap/lib/ProgressBar');
var Well = require('react-bootstrap/lib/Well');

// My Imports
var auth = require('./auth');
var Nav = require('./nav');

const Paper = React.createClass({
    render: function () {
        return <div>
            <Panel>
                <Col xs={12}>
                    <Link to={"/web/paper/" + this.props.paper.id + "/"}>
                        <h4>{this.props.paper.year} {this.props.paper.month}</h4>
                    </Link>
                </Col>
            </Panel>
        </div>;
    }
});

const PaperList = React.createClass({
    render: function () {
        if (this.props.papers) {
            var self = this;
            var paperNodes = this.props.papers.map(function (paper) {
                return <Paper key={paper.id} paper={paper}/>
            })
        }
        return <Col xs={12}>
            {paperNodes}
        </Col>;
    }
});

const CourseDetail = React.createClass({

    getPapers: function () {
        var promise = auth.ajax({
            type: "GET",
            url: "/api/course/" + this.props.params.courseId + "/paper/"
        });

        promise.done((data, status, request) => {
            this.setState({papers: data});
        });
    },

    getInitialState: function () {
        return {
            papers: []
        };
    },

    componentDidMount: function () {
        this.getPapers();
    },

    render: function () {
        return <div>
            <Nav nav="courses"/>
            <div className="container">
                <Row>
                    <Col xs={12}>
                        <PaperList papers={this.state.papers} onChange={this.componentDidMount.bind(this)}/>
                    </Col>
                </Row>
            </div>
        </div>;
    }
});

module.exports = CourseDetail;