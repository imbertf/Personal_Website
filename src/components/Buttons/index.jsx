import React from "react";

function Button(props) {
    const {
        color,
        text,
        position,
        top,
        right,
        bottom,
        left,
        shadow,
        className,
        onClick,
    } = props;

    const buttonStyle = {
        backgroundColor: color,
        position: position,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        boxShadow: shadow,
    };

    return (
        <button style={buttonStyle} className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
