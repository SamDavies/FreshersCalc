import React, {Component, PropTypes} from "react";


class ScoreBar extends Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    render() {
        return <div className="score-bar-container" style={{width: this.state.width}}>
            <div className="score-bar"
                 style={{
                 visibility: this.props.stats.percent_pass > 0 ? ("visible") : ("hidden"),
                 width: 100 * this.props.stats.percent_pass + "%", backgroundColor: "#00d8ff"}}>
                <span>{(this.props.stats.percent_pass * 100).toFixed(1)}% Achieved</span>
            </div>
            <div className="score-bar"
                 style={{
                 visibility: this.props.stats.percent_fail > 0 ? ("visible") : ("hidden"),
                 width: 100 * this.props.stats.percent_fail  + "%", backgroundColor: "#ffe39a"}}>
                <span>{(this.props.stats.percent_fail * 100).toFixed(1)}% Lost</span>
            </div>
            <div className="score-bar" style={{
            visibility: this.props.stats.percent_remaining > 0 ? ("visible") : ("hidden"),
            width: 100 * this.props.stats.percent_remaining  + "%", backgroundColor: "#999999"
            }}>
                <span>{(this.props.stats.percent_remaining * 100).toFixed(1)}% Remaining</span>
            </div>
        </div>
    }

    updateDimensions() {
        this.setState({width: $(window).width(), height: $(window).height()});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default ScoreBar