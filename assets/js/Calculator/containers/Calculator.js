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
        if(instance){
            return instance.value;
        }
        return 0;
    }

    render() {
        var balance = this.props.budget;

        balance -= this.getCost(this.props.accommodation, this.props.selectedAccommodationId);
        balance -= 4.0 * this.getCost(this.props.catering, this.props.selectedCateringId);

        return <div>
            {balance}
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
)(Calculator);