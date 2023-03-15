import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Buttons";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={"/"}>
                    <Button
                        className="navBarButton"
                        text={"HOME"}
                        color={"#3c3331ff"}
                        shadow={"5px 5px 0px #2E2321"}
                    />
                </NavLink>
                <NavLink to={"/about"}>
                    <Button
                        className="navBarButton"
                        text={"ABOUT"}
                        color={"#0749b4ff"}
                        shadow={"5px 5px 0px #070295"}
                    />
                </NavLink>
                <NavLink to={"/contact"} activeclassname="active">
                    <Button
                        className="navBarButton"
                        text={"CONTACT"}
                        color={"#fece15ff"}
                        shadow={"5px 5px 0px #D8C51D"}
                    />
                </NavLink>
                <NavLink to={"/cv"} activeclassname="active">
                    <Button
                        className="navBarButton"
                        text={"CV"}
                        color={"#008d45ff"}
                        shadow={"5px 5px 0px #0a6c1c"}
                    />
                </NavLink>
                <NavLink to={"/projects"} activeclassname="active">
                    <Button
                        className="navBarButton"
                        text={"PROJECTS"}
                        color={"#eb1a1dff"}
                        shadow={"5px 5px 0px #850909"}
                    />
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
