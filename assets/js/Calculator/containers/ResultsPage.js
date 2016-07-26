import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BreadcrumbBar from "../components/BreadcrumbBar";
import {Link, browserHistory} from "react-router";

// Bootstrap Imports
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var Image = require('react-bootstrap/lib/Image');


class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.openFacebookShare = this.openFacebookShare.bind(this);
        this.getCost = this.getCost.bind(this);
        this.getSpending = this.getSpending.bind(this);
    }

    openFacebookShare() {
        window.open("https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2" +
            "Ffreshers-calc.herokuapp.com%2Fweb%2Fexpenses%2F&picture=http%3A%2F%2Fwww.insert-image" +
            "-share-url-here.jpg&name=Freshers%20Calculator%20by%20the%20Tab&caption=%20&descriptio" +
            "n=I%20will%20overspent%20by%20%C2%A3200%20at%20Freshers.&redirect_uri=http%3A%2F%2Fwww" +
            ".facebook.com%2F")
    }

    getCost(collection, instanceId) {
        let instance = collection.filter(t => (t.id == instanceId))[0];
        if (instance) {
            return instance.value;
        }
        return 0;
    }

    getSpending() {
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

        return balance
    }

    render() {
        return <div>
            <div className="container">
                <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3}>
                    <Panel footer={
                        <Row>
                            <Col xs={6}>
                                <Button bsStyle="link" onClick={this.openFacebookShare}>
                                    Share with facebook
                                </Button>
                            </Col>
                            <Col xs={6} className="text">
                                and see who is going to spend the most this freshers
                            </Col>
                        </Row>
                    }>
                        <BreadcrumbBar activeName="results"/>


                        <Col xs={12} className="question">
                            <p>
                                You have overspent by £{this.getSpending()} over freshers
                            </p>
                        </Col>

                        <Col xs={12} className="text">
                            <p>
                                Fair enough, you plan on letting loose when you get to uni.
                            </p>
                        </Col>

                        <Col xs={12} className="text">
                            <p>
                                Make sure you've got a safety net for freshers with an interest free overdraft when
                                signing
                                up
                                for a NatWest student bank account.
                            </p>
                        </Col>

                        <Col xs={8} className="text">
                            <Button bsStyle="link" onClick={this.openFacebookShare}>
                                Apply for student bank account
                            </Button>
                        </Col>

                        <Col xs={4} className="text col-no-pad-left">
                            <Image className="natwest-logo" src="/static/natwest-logo.png" responsive/>
                        </Col>


                        <Col xs={12}>
                            <hr className="breadcrumb-hr"/>
                        </Col>

                        <Col xs={12} className="text">
                            Sadly, your overspending means you can't really afford to treat yourself. It might be worth
                            taking it easy for a couple of weeks to control your spending.
                        </Col>

                    </Panel>
                </Col>
            </div>
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
)(ResultsPage);