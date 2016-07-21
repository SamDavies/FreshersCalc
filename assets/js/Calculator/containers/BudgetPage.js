import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getUniversities, selectUniversity} from "../actions/UniversityActions";
import UniversityList from "../components/UniversityList";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');


class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSelectUniversity = this.onSelectUniversity.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getUniversities());
    }

    onSelectUniversity(id) {
        this.props.dispatch(selectUniversity(id))
    }

    render() {
        return <div>
            <div className="container">
                <Row>
                    <Col xs={12}>
                        <UniversityList
                            universities={this.props.universities}
                            onSelectUniversity={this.onSelectUniversity}
                        />
                    </Col>
                </Row>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        universities: state.universityReducer.universities
    }
};

export default connect(
    mapStateToProps
)(BudgetPage);