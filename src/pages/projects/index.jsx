import React from "react";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Circle from "../../components/Circle";
import { ImCross } from "react-icons/im";

const Projects = () => {
    return (
        <>
            <Header />
            <main className="mainWrapper mainWrapper__projectsPage">
                <div className="projectsContent">
                    <div className="headerContent">
                        <div className="circleContent">
                            <Circle
                                className={
                                    "circle-big circle-borderColor-white circle-bg-blue circle-boxShadow"
                                }
                            />
                            <Circle
                                className={
                                    "circle circle-bg-red circle-boxShadow"
                                }
                            />
                            <Circle
                                className={
                                    "circle circle-bg-yellow circle-boxShadow"
                                }
                            />
                            <Circle
                                className={
                                    "circle circle-bg-green circle-boxShadow"
                                }
                            />
                        </div>
                        <div className="middle"></div>
                        <div className="end"></div>
                    </div>
                    <Slideshow />
                    <div className="cross">
                        <ImCross />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;
