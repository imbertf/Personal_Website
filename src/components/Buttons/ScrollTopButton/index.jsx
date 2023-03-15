import React from "react";
import Button from "../index";

const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            className="navBarButton"
            text={"TOP"}
            color={"#432b4f"}
            shadow={"5px 5px 0px #2E2321"}
            onClick={scrollToTop}
        />
    );
};

export default ScrollButton;
