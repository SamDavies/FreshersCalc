import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

// Bootstrap Imports


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.getCost = this.getCost.bind(this);
    }

    getCost(collection, instanceId) {
        let instance = collection.filter(t => (t.id == instanceId))[0];
        if (instance) {
            return instance.value;
        }
        return 0;
    }

    static weekToMonth(weekly) {
        return (weekly * 52.0) / 12.0
    }

    render() {
        var balance = this.props.budget;

        // budget
        balance -= this.getCost(this.props.accommodation, this.props.selectedAccommodationId);
        balance -= this.getCost(this.props.catering, this.props.selectedCateringId);

        // expenses
        for (var i = 0; i < this.props.items.length; i++) {
            balance -= this.getCost(this.props.items, this.props.selectedItemIds[i]);
        }
        balance -= this.getCost(this.props.homeTrips, this.props.selectedHomeTripId);
        balance -= this.getCost(this.props.gyms, this.props.selectedGymId);
        balance -= this.getCost(this.props.haircuts, this.props.selectedHaircutId);
        balance -= this.getCost(this.props.shoppings, this.props.selectedShoppingId);

        //going out
        var goingOut = 0;
        let selectedDrinkCountLength = this.props.selectedDrinkCounts.length;
        for (var j = 0; j < selectedDrinkCountLength; j++) {
            let drinkCount = this.props.selectedDrinkCounts[j];
            let drink = this.props.drinks.filter(t => (t.id == drinkCount.id));
            goingOut += drink[0].value * drinkCount.count;
        }
        goingOut += this.getCost(this.props.rounds, this.props.selectedRoundId);
        goingOut += this.getCost(this.props.meals, this.props.selectedMealId);
        goingOut += this.getCost(this.props.taxis, this.props.selectedTaxiId);
        goingOut *= this.props.selectedNightIds.length;

        balance -= goingOut;

        return <div>
            {balance}
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        // budget

        universities: state.universityReducer.universities,
        selectedUniversityId: state.universityReducer.selectedUniversityId,

        budget: state.budgetReducer.budget,

        accommodation: state.accommodationReducer.accommodation,
        selectedAccommodationId: state.accommodationReducer.selectedAccommodationId,

        catering: state.cateringReducer.catering,
        selectedCateringId: state.cateringReducer.selectedCateringId,

        // expenses

        items: state.itemReducer.items,
        selectedItemIds: state.itemReducer.selectedItemIds,

        homeTrips: state.homeTripReducer.homeTrips,
        selectedHomeTripId: state.homeTripReducer.selectedHomeTripId,

        gyms: state.gymReducer.gyms,
        selectedGymId: state.gymReducer.selectedGymId,

        haircuts: state.haircutReducer.haircuts,
        selectedHaircutId: state.haircutReducer.selectedHaircutId,

        shoppings: state.shoppingReducer.shoppings,
        selectedShoppingId: state.shoppingReducer.selectedShoppingId,

        // going out

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
)(Calculator);