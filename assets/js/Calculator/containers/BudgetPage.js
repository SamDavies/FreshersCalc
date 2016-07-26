import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {getUniversities, selectUniversity} from "../actions/universityActions";
import {getAccommodation, selectAccommodation} from "../actions/accommodationActions";
import {getCatering, selectCatering} from "../actions/cateringActions";
import {setBudget} from "../actions/budgetActions";
import SelectionList from "../components/SelectionList";
import RadioGroupList from "../components/RadioGroupList";
import MoneyInput from "../components/MoneyInput";
import BreadcrumbBar from "../components/BreadcrumbBar";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');


class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSelectUniversity = this.onSelectUniversity.bind(this);
        this.onSetBudget = this.onSetBudget.bind(this);
        this.onSelectAccommodation = this.onSelectAccommodation.bind(this);
        this.onSelectCatering = this.onSelectCatering.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getUniversities());
        this.props.dispatch(getAccommodation());
        this.props.dispatch(getCatering());
    }

    onSelectUniversity(id) {
        this.props.dispatch(selectUniversity(id))
    }

    onSetBudget(budget) {
        this.props.dispatch(setBudget(budget))
    }

    onSelectAccommodation(id) {
        this.props.dispatch(selectAccommodation(id))
    }

    onSelectCatering(id) {
        this.props.dispatch(selectCatering(id))
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
                    <Panel>
                        <BreadcrumbBar activeName="budget"/>

                        <Col xs={12}>
                            <SelectionList
                                header="What university do you go to?"
                                placeholder="university"
                                options={this.props.universities}
                                selectedOption={this.props.selectedUniversityId}
                                onSelectOption={this.onSelectUniversity}
                            />

                            <MoneyInput
                                header="What’s your total maintenance loan?"
                                controlId="budget"
                                value={this.props.budget ? "£" + this.props.budget : null}
                                onChange={this.onSetBudget}
                                placeholder="£ per semester"
                            />

                            <RadioGroupList
                                innerCols={4}
                                outerCols={12}
                                header="What type of accommodation are you living in?"
                                name="accommodation"
                                options={this.props.accommodation}
                                selectedOption={this.props.selectedAccommodationId}
                                onSelectOption={this.onSelectAccommodation}
                            />

                            <RadioGroupList
                                innerCols={12}
                                outerCols={12}
                                header="Are you catered or self-catered?"
                                name="catering"
                                options={this.props.catering}
                                selectedOption={this.props.selectedCateringId}
                                onSelectOption={this.onSelectCatering}
                            />
                        </Col>

                        <Col xs={12}>
                            <Button bsStyle="link" onClick={() => browserHistory.push('/web/expenses/')}>
                                Continue to your expenses »
                            </Button>
                        </Col>

                    </Panel>
                </Col>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        universities: state.universityReducer.universities,
        selectedUniversityId: state.universityReducer.selectedUniversityId,

        budget: state.budgetReducer.budget,

        accommodation: state.accommodationReducer.accommodation,
        selectedAccommodationId: state.accommodationReducer.selectedAccommodationId,

        catering: state.cateringReducer.catering,
        selectedCateringId: state.cateringReducer.selectedCateringId
    }
};

export default connect(
    mapStateToProps
)(BudgetPage);