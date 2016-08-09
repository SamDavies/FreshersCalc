import React, {Component, PropTypes} from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {getUniversities, selectUniversity} from "../actions/universityActions";
import {getAccommodation, selectAccommodation} from "../actions/accommodationActions";
import {getCatering, selectCatering} from "../actions/cateringActions";
import {setBudget} from "../actions/budgetActions";
import {getItems} from "../actions/itemActions";
import {getHomeTrips} from "../actions/homeTripActions";
import {getGyms} from "../actions/gymActions";
import {getHaircuts} from "../actions/haircutActions";
import {getShoppings} from "../actions/shoppingActions";
import {getDrinks} from "../actions/drinkActions";
import {getRounds} from "../actions/roundActions";
import {getMeals} from "../actions/mealActions";
import {getTaxis} from "../actions/taxiActions";
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
        this.props.dispatch(getItems());
        this.props.dispatch(getHomeTrips());
        this.props.dispatch(getGyms());
        this.props.dispatch(getHaircuts());
        this.props.dispatch(getShoppings());
        this.props.dispatch(getDrinks());
        this.props.dispatch(getRounds());
        this.props.dispatch(getMeals());
        this.props.dispatch(getTaxis());
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
            <Panel>
                <BreadcrumbBar activeName="budget"/>

                <Col xs={12}>
                    <SelectionList
                        xsCols={12}
                        smCols={6}
                        header="What university are you going to?"
                        placeholder="Please choose..."
                        options={this.props.universities}
                        selectedOption={this.props.selectedUniversityId}
                        onSelectOption={this.onSelectUniversity}
                    />

                    <MoneyInput
                        header="What will your total maintenance loan be?"
                        controlId="budget"
                        value={this.props.budget ? "£" + this.props.budget : null}
                        onChange={this.onSetBudget}
                        placeholder="£ per semester"
                    />

                    <RadioGroupList
                        innerCols={4}
                        outerCols={12}
                        header="What type of accommodation will you be living in?"
                        name="accommodation"
                        options={this.props.accommodation}
                        selectedOption={this.props.selectedAccommodationId}
                        onSelectOption={this.onSelectAccommodation}
                    />

                    <RadioGroupList
                        innerCols={12}
                        outerCols={12}
                        header="Will you be catered or self-catered?"
                        name="catering"
                        options={this.props.catering}
                        selectedOption={this.props.selectedCateringId}
                        onSelectOption={this.onSelectCatering}
                    />
                </Col>

                <Col xs={12}>
                    <Button bsStyle="danger" onClick={() => browserHistory.push('/web/expenses/')}>
                        Continue to your expenses »
                    </Button>
                </Col>
            </Panel>
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