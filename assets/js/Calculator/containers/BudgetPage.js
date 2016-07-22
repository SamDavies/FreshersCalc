import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getUniversities, selectUniversity} from "../actions/universityActions";
import {getAccommodation, selectAccommodation} from "../actions/accommodationActions";
import {getCatering, selectCatering} from "../actions/cateringActions";
import {setBudget} from "../actions/budgetActions";
import SelectionList from "../components/SelectionList";
import RadioGroupList from "../components/RadioGroupList";
import MoneyInput from "../components/MoneyInput";
import Calculator from "../containers/Calculator";
import BreadcrumbBar from "../components/BreadcrumbBar";

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
                <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>

                    <BreadcrumbBar activeName="university"/>

                    <Col xs={12}>
                        <SelectionList
                            placeholder="University"
                            options={this.props.universities}
                            selectedOption={this.props.selectedUniversityId}
                            onSelectOption={this.onSelectUniversity}
                        />

                        <MoneyInput
                            controlId="budget"
                            value={this.props.budget}
                            onChange={this.onSetBudget}
                            placeholder="£ per semester"
                        />

                        <RadioGroupList
                            name="accommodation"
                            options={this.props.accommodation}
                            selectedOption={this.props.selectedAccommodationId}
                            onSelectOption={this.onSelectAccommodation}
                        />

                        <RadioGroupList
                            name="catering"
                            options={this.props.catering}
                            selectedOption={this.props.selectedCateringId}
                            onSelectOption={this.onSelectCatering}
                        />
                    </Col>

                    <Calculator/>
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