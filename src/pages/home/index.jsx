import React from "react";
import Button from "../../components/Buttons";
import AnimatedLetter from "../../components/AnimatedLetters";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeContent">
            <div className="textContent">
                <AnimatedLetter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: "natural",
                        strings: ["IMBERTF"],
                        pauseFor: 4500,
                    }}
                />
                <h1 className="h1_mobile">IMBERTF</h1>
                <p>Please select menu</p>
                <BsFillCaretDownFill />
            </div>

            <div className="buttonContent">
                <Link to={"/about"}>
                    <Button
                        text={"ABOUT ME"}
                        color={"#0749b4ff"}
                        position={"relative"}
                        left={"50px"}
                        bottom={"14px"}
                        shadow={"5px 5px 0px #070295"}
                    />
                </Link>
                <Link to={"/projects"}>
                    <Button
                        text={"PROJECTS"}
                        color={"#eb1a1dff"}
                        position={"relative"}
                        top={"85px"}
                        left={"40px"}
                        shadow={"5px 5px 0px #850909"}
                    />
                </Link>
                <Link to={"/cv"}>
                    <Button
                        text={"CV"}
                        color={"#008d45ff"}
                        position={"relative"}
                        bottom={"48px"}
                        right={"40px"}
                        shadow={"5px 5px 0px #0a6c1c"}
                    />
                </Link>
                <Link to={"/contact"}>
                    <Button
                        text={"CONTACT"}
                        color={"#fece15ff"}
                        position={"relative"}
                        top={"42px"}
                        right={"50px"}
                        shadow={"5px 5px 0px #D8C51D"}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Home;
