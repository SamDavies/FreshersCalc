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
        balance -= Calculator.weekToMonth(this.getCost(this.props.catering, this.props.selectedCateringId));

        // expenses
        for (var i = 0; i < this.props.items.length; i++) {
            balance -= this.getCost(this.props.items, this.props.selectedItemIds[i]);
        }
        balance -= this.getCost(this.props.homeTrips, this.props.selectedHomeTripId);
        balance -= this.getCost(this.props.gyms, this.props.selectedGymId);
        balance -= this.getCost(this.props.haircuts, this.props.selectedHaircutId);
        balance -= this.getCost(this.props.shoppings, this.props.selectedShoppingId);

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
        selectedShoppingId: state.shoppingReducer.selectedShoppingId
    }
};

export default connect(
    mapStateToProps
)(Calculator);