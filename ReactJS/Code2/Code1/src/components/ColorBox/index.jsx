import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import './ColorBox.css';

class ColorBox extends PureComponent {
    render() {
        const { color } = this.props;
        return (
            <div
                style={{ backgroundColor: color }}
                className="color-box"
            ></div>
        );
    };
};

ColorBox.propTypes = {
    color: PropTypes.string.isRequired
};

export default ColorBox;
