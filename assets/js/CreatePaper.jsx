var React = require('react');
var Link = require('react-router').Link;

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var InputGroup = require('react-bootstrap/lib/InputGroup');
var Panel = require('react-bootstrap/lib/Panel');

// My Imports
var auth = require('./auth');
var Nav = require('./nav');

const CreatePaper = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            url: "",
            year: "2017",
            month: "1"
        }
    },

    handleAddPaper() {
        var data = {
            'url': this.state.url,
            'year': this.state.year,
            'month': this.state.month
        };

        var promise = auth.ajax({
            type: "POST",
            url: "/api/course/" + this.props.params.courseId + "/paper/",
            data: JSON.stringify(data)
        });

        promise.done((data, status, request) => {
            this.context.router.replace('/web/course/' + this.props.params.courseId + '/paper/')
        });
    },

    onUrlChange(e) {
        this.setState({
            url: e.target.value
        });
    },

    onYearChange(e) {
        this.setState({
            year: e.target.value
        });
    },

    onMonthChange(e) {
        this.setState({
            month: e.target.value
        });
    },

    render: function () {
        return <div>
            <Nav nav="create"/>
            <div className="container">
                <Row className="centered-form">
                    <Col xs={12} sm={6} smOffset={3}>
                        <Panel header="Add a new past paper">
                            <form>
                                <FormGroup controlId="url">
                                    <FormControl
                                        type="text"
                                        value={this.state.url}
                                        placeholder="Link to the origional past paper"
                                        onChange={this.onUrlChange}
                                    />
                                </FormGroup>

                                <FormGroup controlId="year">
                                    <FormControl
                                        componentClass="select"
                                        value={this.state.year}
                                        placeholder="Year"
                                        onChange={this.onYearChange}
                                    >
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2015</option>
                                        <option value="2013">2015</option>
                                        <option value="2012">2015</option>
                                        <option value="2011">2015</option>
                                        <option value="2010">2015</option>
                                        <option value="2009">2015</option>
                                        <option value="2008">2015</option>
                                        <option value="2007">2015</option>
                                        <option value="2006">2015</option>
                                        <option value="2005">2015</option>
                                        <option value="2004">2015</option>
                                        <option value="2003">2015</option>
                                        <option value="2002">2015</option>
                                        <option value="2001">2015</option>
                                        <option value="2000">2015</option>
                                    </FormControl>
                                </FormGroup>

                                <FormGroup controlId="month">
                                    <FormControl
                                        componentClass="select"
                                        value={this.state.month}
                                        placeholder="Month"
                                        onChange={this.onMonthChange}
                                    >
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </FormControl>
                                </FormGroup>
                                <Button onClick={this.handleAddPaper} bsStyle="primary" id="create">Add Job</Button>
                            </form>
                        </Panel>
                    </Col>
                </Row>
            </div>
        </div>
            ;
    }
});

module.exports = CreatePaper;