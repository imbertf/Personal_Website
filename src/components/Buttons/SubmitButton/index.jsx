import React from "react";
import Button from "../index";

const ScrollButton = ({ onClick, text }) => {
    return (
        <Button
            className="navBarButton navBarButton--submit"
            text={text}
            color={"#3c3331ff"}
            shadow={"5px 5px 0px #2E2321"}
            onClick={onClick}
        />
    );
};

export default ScrollButton;
