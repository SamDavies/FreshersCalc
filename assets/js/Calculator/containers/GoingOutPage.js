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

    componentDidUpdate() {
        ReactDom.findDOMNode(this).scrollTop = 0
    }

    onIncreaseNightCount(dayId) {
        this.props.dispatch(increaseNightCount(dayId))
    }

    onDecreaseNightCount(dayId) {
        this.props.dispatch(decreaseNightCount(dayId))
    }

    onSelectDrinkCount(drinkId, count) {
        this.props.dispatch(selectDrinkCount(drinkId, count))
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

    render() {
        var drinkSelectionLists = [];

        // for each drink, create a selection list where the
        // number of that kind of drink can be selected
        let drinkCount = this.props.drinks.length;
        for (var i = 0; i < drinkCount; i++) {
            let drink = this.props.drinks[i];
            let selectedDrinkCounts = this.props.selectedDrinkCounts.filter(t => (t.id == drink.id));
            var count = null;
            if (selectedDrinkCounts.length != 0) {
                count = selectedDrinkCounts[0].count
            }
            drinkSelectionLists.push(<div key={drink.id}>
                <SelectionList
                    xsCols={8}
                    smCols={4}
                    appendName={" " + drink.name}
                    placeholder={drink.name}
                    options={[
                        {id: 1, name: "1", value: 0},
                        {id: 2, name: "2", value: 0},
                        {id: 3, name: "3", value: 0},
                        {id: 4, name: "4", value: 0},
                        {id: 5, name: "5", value: 0},
                        {id: 6, name: "6", value: 0},
                        {id: 7, name: "7", value: 0},
                        {id: 8, name: "8", value: 0},
                        {id: 9, name: "9", value: 0},
                        {id: 10, name: "10", value: 0}
                    ]}
                    selectedOption={count}
                    onSelectOption={this.onSelectDrinkCount.bind(this, drink.id)}
                />
            </div>);
        }

        return <div>
            <Panel>

                <BreadcrumbBar activeName="going-out"/>

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

                    <Row>
                        <Col xs={12}>
                            <h3 className="question">
                                How many drinks do you plan on having on an average night out?
                            </h3>
                        </Col>
                    </Row>

                    {drinkSelectionLists}

                    <RadioGroupList
                        innerCols={6}
                        outerCols={9}
                        header="Do you buy rounds for friends?"
                        name="rounds"
                        options={this.props.rounds}
                        selectedOption={this.props.selectedRoundId}
                        onSelectOption={this.onSelectRound}
                    />

                    <RadioGroupList
                        innerCols={3}
                        outerCols={12}
                        header="Do you have a snack after a night out?"
                        name="meals"
                        options={this.props.meals}
                        selectedOption={this.props.selectedMealId}
                        onSelectOption={this.onSelectMeal}
                    />

                    <RadioGroupList
                        innerCols={2}
                        outerCols={12}
                        header="Do you get a taxi back after a night out?"
                        name="taxis"
                        options={this.props.taxis}
                        selectedOption={this.props.selectedTaxiId}
                        onSelectOption={this.onSelectTaxi}
                    />
                </Col>

                <Col xs={12}>
                    <Button bsStyle="danger" onClick={() => browserHistory.push('/web/results/')}>
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
        selectedDrinkCounts: state.drinkReducer.selectedDrinkCounts,

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