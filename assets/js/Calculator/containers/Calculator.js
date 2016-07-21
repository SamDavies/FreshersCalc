import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getUniversities, selectUniversity} from "../actions/universityActions";
import {getAccommodation, selectAccommodation} from "../actions/accommodationActions";
import {getCatering, selectCatering} from "../actions/cateringActions";
import {setBudget} from "../actions/budgetActions";
import SelectionList from "../components/SelectionList";
import RadioGroupList from "../components/RadioGroupList";
import MoneyInput from "../components/MoneyInput";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');


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
                <Col xs={12}>
                    <SelectionList
                        options={this.props.universities}
                        selectedOption={this.props.selectedUniversity}
                        onSelectOption={this.onSelectUniversity}
                    />

                    <MoneyInput
                        controlId="budget"
                        value={this.props.budget}
                        onChange={this.onSetBudget}
                        placeholder="£ per semester"
                    />

                    <RadioGroupList
                        options={this.props.accommodation}
                        selectedOption={this.props.selectedAccommodation}
                        onSelectOption={this.onSelectAccommodation}
                    />

                    <RadioGroupList
                        options={this.props.catering}
                        selectedOption={this.props.selectedCatering}
                        onSelectOption={this.onSelectCatering}
                    />
                </Col>
            </div>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        universities: state.universityReducer.universities,
        selectedUniversity: state.universityReducer.selectedUniversity,

        budget: state.budgetReducer.budget,

        accommodation: state.accommodationReducer.accommodation,
        selectedAccommodation: state.accommodationReducer.selectedAccommodation,

        catering: state.cateringReducer.catering,
        selectedCatering: state.cateringReducer.selectedCatering
    }
};

export default connect(
    mapStateToProps
)(BudgetPage);