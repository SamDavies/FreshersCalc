import React, {Component, PropTypes} from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {increaseNightCount, decreaseNightCount} from "../actions/nightCountActions";
import {selectDrinkCount, getDrinks} from "../actions/drinkActions";
import {selectRound, getRounds} from "../actions/roundActions";
import {selectMeal, getMeals} from "../actions/mealActions";
import {selectTaxi, getTaxis} from "../actions/taxiActions";
import CheckBoxList from "../components/CheckBoxList";
import BreadcrumbBar from "../components/BreadcrumbBar";
import SelectionList from "../components/SelectionList";
import RadioGroupList from "../components/RadioGroupList";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');


class GoingOutPage extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onIncreaseNightCount = this.onIncreaseNightCount.bind(this);
        this.onDecreaseNightCount = this.onDecreaseNightCount.bind(this);
        this.onSelectRound = this.onSelectRound.bind(this);
        this.onSelectMeal = this.onSelectMeal.bind(this);
        this.onSelectTaxi = this.onSelectTaxi.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getDrinks());
        this.props.dispatch(getRounds());
        this.props.dispatch(getMeals());
        this.props.dispatch(getTaxis());
    }

    onIncreaseNightCount(dayId) {
        this.props.dispatch(increaseNightCount(dayId))
    }

    onDecreaseNightCount(dayId) {
        this.props.dispatch(decreaseNightCount(dayId))
    }

    onSelectDrink(drinkId) {
        this.props.dispatch(selectDrinkCount(drinkId))
    }

    onSelectRound(roundId) {
        this.props.dispatch(selectRound(roundId))
    }

    onSelectMeal(mealId) {
        this.props.dispatch(selectMeal(mealId))
    }

    onSelectTaxi(taxiId) {
        this.props.dispatch(selectTaxi(taxiId))
    }

    onNextPage() {
        ReactDom.findDOMNode(this).scrollIntoView();
        browserHistory.push('/web/results/');
    }


    render() {
        return <div>
            <Panel>

                <BreadcrumbBar activeName="going-out"/>

                <Col xs={12}>
                    <div className="text-muted">
                        Assuming that you go out every week of the year.
                    </div>
                </Col>

                <Col xs={12}>
                    <CheckBoxList
                        innerCols={4}
                        outerCols={9}
                        header="Which nights do you plan on going out?"
                        name="catering"
                        options={this.props.days}
                        selectedOptions={this.props.selectedNightIds}
                        onSelectOption={this.onIncreaseNightCount}
                        onDeselectOption={this.onDecreaseNightCount}
                    />

                    <RadioGroupList
                        innerCols={6}
                        outerCols={9}
                        header="How much will you spend on drinks on an average night out?"
                        name="drinks"
                        options={this.props.drinks}
                        selectedOption={this.props.selectedDrinkId}
                        onSelectOption={this.onSelectDrink.bind(this)}
                    />

                    <RadioGroupList
                        innerCols={6}
                        outerCols={9}
                        header="Will you buy rounds for friends?"
                        name="rounds"
                        options={this.props.rounds}
                        selectedOption={this.props.selectedRoundId}
                        onSelectOption={this.onSelectRound}
                    />

                    <RadioGroupList
                        innerCols={3}
                        outerCols={12}
                        header="Will you have a snack after a night out?"
                        name="meals"
                        options={this.props.meals}
                        selectedOption={this.props.selectedMealId}
                        onSelectOption={this.onSelectMeal}
                    />

                    <RadioGroupList
                        innerCols={2}
                        outerCols={12}
                        header="Will you get a taxi back after a night out?"
                        name="taxis"
                        options={this.props.taxis}
                        selectedOption={this.props.selectedTaxiId}
                        onSelectOption={this.onSelectTaxi}
                    />
                </Col>

                <Col xs={12}>
                    <Button bsStyle="danger" onClick={this.onNextPage.bind(this)}>
                        Show me my results!
                    </Button>
                </Col>
            </Panel>
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        days: state.nightCountReducer.days,
        selectedNightIds: state.nightCountReducer.selectedNightIds,

        drinks: state.drinkReducer.drinks,
        selectedDrinkId: state.drinkReducer.selectedDrinkId,

        rounds: state.roundReducer.rounds,
        selectedRoundId: state.roundReducer.selectedRoundId,

        meals: state.mealReducer.meals,
        selectedMealId: state.mealReducer.selectedMealId,

        taxis: state.taxiReducer.taxis,
        selectedTaxiId: state.taxiReducer.selectedTaxiId
    }
};

export default connect(
    mapStateToProps
)(GoingOutPage);