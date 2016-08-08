import React, {Component, PropTypes} from "react";
import ReactDom from "react-dom";
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
        this.getSpending = this.getSpending.bind(this);
        this.affordCalculator = this.affordCalculator.bind(this);
    }

    componentDidUpdate() {
        ReactDom.findDOMNode(this).scrollTop = 0
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
        window.open("http://personal.natwest.com")
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

        var spending = this.getSpending();

        var overspend = {
            part1: <div>You have overspent by <span
                className="text-cost">£{this.numberWithCommas(-spending.toFixed())}</span> over freshers</div>,
            part2: "Fair enough, you plan on letting loose when you get to uni.",
            part3: <div>
                Make sure you've got a safety net for freshers with an interest
                free overdraft when signing up for a <span className="rbs-text">Royal Bank of Scotland</span> student bank account.
            </div>,
            part4: "Sadly, your overspending means you can't really afford to treat yourself. " +
            "It might be worth taking it easy for a couple of weeks to control your spending."
        };

        let worldTripsText = this.affordCalculator(spending, 2700, " round the world trip", " round the world trips");
        let aleText = this.affordCalculator(spending, 3.5, " pint of nice ale", " pints of nice ale");
        let breakfastText = this.affordCalculator(spending, 2.99, " Wetherspoon's English breakfast", " Wetherspoon's English breakfasts");

        // only allow 1000, 100 or 1 sweets
        let sweetSpending = (spending > 10000) ? 1000000 : (spending > 10) ? 1000 : (spending > 1) ? 100 : spending * 100;
        var sweetsText;
        if (sweetSpending >= 100) {
            sweetsText = this.affordCalculator(sweetSpending, 1, "", "'s of 1p sweets");
        } else {
            sweetsText = this.affordCalculator(sweetSpending, 1, " sweet exactly!", " or so 1p sweets");
        }

        var underspend = {
            part1: <div>You have <span className="text-cost">£{this.numberWithCommas(spending.toFixed())}</span> left in
                your account</div>,
            part2: "You are watching your money carefully over freshers.",
            part3: <div>
                Apply for a student bank account with an interest-free arranged overdraft
                with <span className="rbs-text">Royal Bank of Scotland</span> student bank account.
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
        if (spending <= 0) {
            content = overspend;
        }

        return <div>
            <Panel footer={
                        <Row>
                            <Col xs={12} sm={6}  className="col-footer">
                                <Button bsStyle="danger" className="btn-facebook" onClick={this.openFacebookShare.bind(this, spending)}>
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

                <Col xs={12} className="text">
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
                    <Image className="rbs-logo" src="/static/rbs-logo.png" responsive/>
                </Col>


                <Col xs={12}>
                    <hr className="breadcrumb-hr"/>
                </Col>

                <Col xs={12} className="text">
                    {content.part4}
                </Col>

            </Panel>
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