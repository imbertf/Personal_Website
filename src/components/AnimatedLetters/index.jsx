import React from "react";
import Typewriter from "typewriter-effect";

const AnimatedLetter = ({ options }) => {
    return (
        <h1 className="h1_desktop h1__about">
            <Typewriter options={options} />
        </h1>
    );
};

export default AnimatedLetter;
