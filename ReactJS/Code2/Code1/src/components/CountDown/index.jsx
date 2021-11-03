import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './CountDown.css';

class CountDown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentSecond: 0
        };
    };

    componentDidMount() {
        const { seconds } = this.props;
        this.countdown(seconds);
    };

    countdown(seconds) {
        if (seconds === -1) return;
        this.setState({ currentSecond: seconds });
        setTimeout(() => this.countdown(seconds - 1), 1000);
    };

    render() {
        const { currentSecond } = this.state;
        return (
            <p className="countdown"> {currentSecond} </p>
        );
    };
};

CountDown.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default CountDown;
