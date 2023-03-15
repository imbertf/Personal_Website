import React from "react";
import err404 from "../../medias/images/err404.gif";
import { NavLink } from "react-router-dom";
import Button from "../../components/Buttons";

const notFound = () => {
    const getUrl = window.location.pathname;

    return (
        <>
            <div className="notFoundContent">
                <div className="imgContent">
                    <img src={err404} alt="404 not found" />
                </div>
                <div className="textContent">
                    <h2>Meow mi mi mi somthing wrong !</h2>
                    <p>
                        The requested URL <span>{getUrl}</span> is not found
                        <br />
                        <br />
                    </p>
                    <p>
                        Please come back to the home page and dont forget to
                        feed meow !
                        <br />
                        Remember you're just my human ❤️
                    </p>
                </div>

                <NavLink to={"/"}>
                    <Button
                        className="navBarButton"
                        text={"HOME"}
                        color={"#00a8e1"}
                        shadow={"5px 5px 0px rgb(7 73 180)"}
                    />
                </NavLink>
            </div>
        </>
    );
};

export default notFound;
