import React, {Component, PropTypes} from "react";

class Banner extends Component {
    render() {
        return <div className="bs-docs-header" style={{marginBottom: 0}} id="content">
            <div className="container">
                <h1>{(this.props.stats.average_score * 100).toFixed(1)}% Average</h1>
                <h4>Average needed on remaining for A = {(this.props.stats.average_for_a * 100).toFixed(1)}%, B
                    = {(this.props.stats.average_for_b * 100).toFixed(1)}%</h4>
            </div>
        </div>;
    }
}

export default Banner