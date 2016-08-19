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
        this.getCost = this.getCost.bind(this);
        this.affordCalculator = this.affordCalculator.bind(this);
    }

    openFacebookShare(amount) {
        if (amount < 0) {
            window.open("https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2" +
                "Fthetab.com/uk/brands/2016/07/28/how-much-are-you-going-to-spend-this-freshers-8424%2Fweb%2Fexpenses%2F&picture=http%3A%2F%2Fwww.insert-image" +
                "-share-url-here.jpg&name=Freshers%20Calculator%20by%20the%20Tab&caption=%20&descriptio" +
                "n=I%20will%20overspend%20by%20%C2%A3" + this.numberWithCommas(-amount) + "%20this%20freshers." +
                "&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F")
        } else {
            window.open("https://www.facebook.com/dialog/feed?app_id=184683071273&link=https%3A%2F%2" +
                "Fthetab.com/uk/brands/2016/07/28/how-much-are-you-going-to-spend-this-freshers-8424%2Fweb%2Fexpenses%2F&picture=http%3A%2F%2Fwww.insert-image" +
                "-share-url-here.jpg&name=Freshers%20Calculator%20by%20the%20Tab&caption=%20&descriptio" +
                "n=I%20will%20have%20by%20%C2%A3" + this.numberWithCommas(amount) + "%20left%20in%20my%20" +
                "account%20after%20freshers.&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F")
        }
    }

    openNatWest() {
        window.open("http://personal.natwest.com/personal/current-accounts/compare-current-accounts/student-account.html?extcam=N_PAR_TAB_MTA_Stdnt_CAM_1x1_LINK_")
    }

    getCost(collection, instanceId) {
        let instance = collection.filter(t => (t.id == instanceId))[0];
        if (instance) {
            return instance.value;
        }
        return 0;
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    affordCalculator(currentAmount, costPerItem, textSingular, textPlural) {
        if (currentAmount > costPerItem) {
            let itemCount = (currentAmount / costPerItem).toFixed();
            if (itemCount > 1) {
                return this.numberWithCommas(itemCount) + textPlural;
            } else {
                return this.numberWithCommas(itemCount) + textSingular;
            }

        } else {
            return ""
        }
    }

    render() {
        var balance = this.props.budget;

        // budget
        let costAccommodation = this.getCost(this.props.accommodation, this.props.selectedAccommodationId);
        let costCatering = this.getCost(this.props.catering, this.props.selectedCateringId);

        // expenses
        var costItems = 0;
        for (var i = 0; i < this.props.items.length; i++) {
            costItems += this.getCost(this.props.items, this.props.selectedItemIds[i]);
        }
        let costHomeTrips = this.getCost(this.props.homeTrips, this.props.selectedHomeTripId);
        let costGyms = this.getCost(this.props.gyms, this.props.selectedGymId);
        let costHaircuts = this.getCost(this.props.haircuts, this.props.selectedHaircutId);
        let costShoppings = this.getCost(this.props.shoppings, this.props.selectedShoppingId);

        //going out
        let nightsPerYear = this.props.selectedNightIds.length * 38;
        let costDrinks = this.getCost(this.props.drinks, this.props.selectedDrinkId) * nightsPerYear;
        let costRounds = this.getCost(this.props.rounds, this.props.selectedRoundId) * nightsPerYear;
        let costMeals = this.getCost(this.props.meals, this.props.selectedMealId) * nightsPerYear;
        let costTaxis = this.getCost(this.props.taxis, this.props.selectedTaxiId) * nightsPerYear;
        let costGoingOut = costDrinks + costRounds + costMeals + costTaxis;

        // budget
        balance -= costAccommodation;
        balance -= costCatering;

        // expenses
        balance -= costItems;
        balance -= costHomeTrips;
        balance -= costGyms;
        balance -= costHaircuts;
        balance -= costShoppings;

        //going out
        balance -= costGoingOut;

        var overspend = {
            part1: <div>You will have overspent by <span className="text-cost">
                    £{this.numberWithCommas(-balance.toFixed())}
                </span> this year</div>,
            part2: "Fair enough, you plan on letting loose when you get to uni.",
            part3: <div>
                Make sure you've got a safety net for uni with an interest
                free overdraft when applying for a <span className="natwest-text">NatWest</span> student bank account.
            </div>,
            part4: "Sadly, your overspending means you can't really afford to treat yourself. " +
            "It might be worth taking it easy for a couple of weeks to control your spending."
        };

        let worldTripsText = this.affordCalculator(balance, 2700, " round the world trip", " round the world trips");
        let aleText = this.affordCalculator(balance, 3.5, " pint of nice ale", " pints of nice ale");
        let breakfastText = this.affordCalculator(balance, 2.99, " Wetherspoon's English breakfast", " Wetherspoon's English breakfasts");

        // only allow 1000, 100 or 1 sweets
        let sweetSpending = (balance > 10000) ? 1000000 : (balance > 10) ? 1000 : (balance > 1) ? 100 : balance * 100;
        var sweetsText;
        if (sweetSpending >= 100) {
            sweetsText = this.affordCalculator(sweetSpending, 1, "", "'s of 1p sweets");
        } else {
            sweetsText = this.affordCalculator(sweetSpending, 1, " sweet exactly!", " or so 1p sweets");
        }

        var underspend = {
            part1: <div>You will have <span className="text-cost">
                    £{this.numberWithCommas(balance.toFixed())}
                </span> left in your account</div>,
            part2: "You are watching your money carefully this year.",
            part3: <div>
                Make sure you've got a safety net for uni with an interest
                free overdraft when applying for a <span className="natwest-text">NatWest</span> student bank account.
            </div>,
            part4: <div>
                <div className="text-light">You could afford</div>
                <div className="text-large">{worldTripsText}</div>
                <div className="text-large">{aleText}</div>
                <div className="text-large">{breakfastText}</div>
                <div className="text-large">{sweetsText}</div>
                <div className="text-light">Lucky you!</div>
            </div>
        };
        var content = underspend;
        if (balance <= 0) {
            content = overspend;
        }

        return <div>
            <Panel footer={
                        <Row>
                            <Col xs={12} sm={6}  className="col-footer">
                                <Button bsStyle="danger" className="btn-facebook" onClick={this.openFacebookShare.bind(this, balance)}>
                                    <i style={{marginRight: "0.5em"}} className="fa fa-facebook" aria-hidden="true"/> Share with your friends
                                </Button>
                            </Col>
                            <Col sm={6} className="text text-footer hidden-xs">
                                and see who is going to spend the most this freshers
                            </Col>
                            <Col xs={12} className="col-footer text text-footer visible-xs">
                                and see who is going to spend the most this freshers
                            </Col>
                        </Row>
                    }>
                <BreadcrumbBar activeName="results"/>


                <Col xs={12} className="question">
                    {content.part1}
                    <p/>
                </Col>

                <Col xs={12} className="text small-gap">
                    {content.part2}
                    <p/>
                </Col>

                <Col xs={12} className="text">
                    {content.part3}
                    <p/>
                </Col>

                <Col sm={7} className="text hidden-xs">
                    <Button bsStyle="danger" onClick={this.openNatWest}>
                        Apply for a student bank account
                    </Button>
                </Col>

                <Col xs={12} className="text visible-xs">
                    <Button bsStyle="danger" onClick={this.openNatWest}>
                        Apply for student account
                    </Button>
                </Col>

                <Col xs={6} sm={5} className="text">
                    <Image className="natwest-logo" src="/static/natwest-logo.png" responsive/>
                </Col>


                <Col xs={12}>
                    <hr className="middle-hr"/>
                </Col>

                <Col xs={12} className="text">
                    {content.part4}
                </Col>

                <Col xs={12}>
                    <hr className="middle-hr"/>
                </Col>

                <Col xs={12} className="text gap-footer">
                    <Col className="no-padding text-light small-gap">Average spending per month:</Col>
                    <Col sm={6} className="no-padding text">£{costAccommodation} on accommodation</Col>
                    <Col sm={6} className="no-padding text">£{costShoppings} on online shopping</Col>
                    <Col sm={6} className="no-padding text">£{costHomeTrips} on travelling home</Col>
                    <Col sm={6} className="no-padding text">£{costDrinks + costRounds} on on drinks</Col>
                    <Col sm={6} className="no-padding text">£{costGyms} on gym membership</Col>
                    <Col sm={6} className="no-padding text">£{costMeals} on post-night food</Col>
                    <Col sm={6} className="no-padding text">£{costHaircuts} on haircut</Col>
                    <Col sm={6} className="no-padding text">£{costTaxis} on taxis</Col>
                </Col>

            </Panel>

            <Col xs={12} className="text-muted text">
                <div className="text-muted-header">
                    NatWest Student Account eligibility criteria:
                </div>
                <p/>
                <div>
                    Subject to account eligibility criteria (including course and residency requirements). You'll need
                    to be aged 17 or older to apply for the account, a permanent UK resident (ordinarily resident in the
                    UK for 3 years or more) and completing a full time undergraduate course that lasts at least 2 years;
                    completing a full time post graduate course; or training as a nurse, at a UK university or college
                    at higher education.
                </div>
                <p/>
                <div className="text-muted-header">
                    NatWest overdraft eligibility criteria:
                </div>
                <p/>
                <div>
                    Overdraft applications are subject to approval and you need to be 18 over or above to apply.
                    (Ordinarily resident in the UK for 3 years or more).
                </div>
                <p/>
            </Col>
        </div>
            ;
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
)(ResultsPage);