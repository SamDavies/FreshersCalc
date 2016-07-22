import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getItems, selectItem, deselectItem} from "../actions/itemActions";
import {getHomeTrips, selectHomeTrip} from "../actions/homeTripActions";
import {getGyms, selectGym} from "../actions/gymActions";
import {getHaircuts, selectHaircut} from "../actions/haircutActions";
import {getShoppings, selectShopping} from "../actions/shoppingActions";
import RadioGroupList from "../components/RadioGroupList";
import CheckBoxList from "../components/CheckBoxList";
import Calculator from "../containers/Calculator";
import BreadcrumbBar from "../components/BreadcrumbBar";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');


class BudgetPage extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
        this.onDeselectItem = this.onDeselectItem.bind(this);
        this.onSelectHomeTrip = this.onSelectHomeTrip.bind(this);
        this.onSelectGym = this.onSelectGym.bind(this);
        this.onSelectHaircut = this.onSelectHaircut.bind(this);
        this.onSelectShopping = this.onSelectShopping.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getItems());
        this.props.dispatch(getHomeTrips());
        this.props.dispatch(getGyms());
        this.props.dispatch(getHaircuts());
        this.props.dispatch(getShoppings());
    }

    onSelectItem(itemId) {
        this.props.dispatch(selectItem(itemId))
    }

    onDeselectItem(itemId) {
        this.props.dispatch(deselectItem(itemId))
    }

    onSelectHomeTrip(homeTripId) {
        this.props.dispatch(selectHomeTrip(homeTripId))
    }

    onSelectGym(gymId) {
        this.props.dispatch(selectGym(gymId))
    }

    onSelectHaircut(haircutId) {
        this.props.dispatch(selectHaircut(haircutId))
    }

    onSelectShopping(shoppingId) {
        this.props.dispatch(selectShopping(shoppingId))
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>

                    <BreadcrumbBar activeName="expenses"/>

                    <Col xs={12}>
                        <CheckBoxList
                            name="catering"
                            options={this.props.items}
                            selectedOptions={this.props.selectedItemIds}
                            onSelectOption={this.onSelectItem}
                            onDeselectOption={this.onDeselectItem}
                        />
                        
                        <RadioGroupList
                            name="homeTrips"
                            options={this.props.homeTrips}
                            selectedOption={this.props.selectedHomeTripId}
                            onSelectOption={this.onSelectHomeTrip}
                        />

                        <RadioGroupList
                            name="gyms"
                            options={this.props.gyms}
                            selectedOption={this.props.selectedGymId}
                            onSelectOption={this.onSelectGym}
                        />

                        <RadioGroupList
                            name="haircuts"
                            options={this.props.haircuts}
                            selectedOption={this.props.selectedHaircutId}
                            onSelectOption={this.onSelectHaircut}
                        />

                        <RadioGroupList
                            name="shopping"
                            options={this.props.shoppings}
                            selectedOption={this.props.selectedShoppingId}
                            onSelectOption={this.onSelectShopping}
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
)(BudgetPage);