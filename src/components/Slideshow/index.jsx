import React, { useState } from "react";
import data from "../../medias/datas/projects.json";
import Button from "../../components/Buttons";
import Tag from "../../components/Tag";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { projects } = data;

    function handlePrevClick() {
        const index =
            currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    }

    function handleNextClick() {
        const index =
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    }

    const currentItem = projects[currentIndex];
    const rightArrow = <RiArrowRightSFill />;
    const leftArrow = <RiArrowLeftSFill />;

    return (
        <div className="slideshow">
            <div className="slideshow-picture">
                <img
                    src={`/images/${currentItem.picture}`}
                    alt={currentItem.name}
                />
            </div>
            <div className="slideshow-content">
                <h2>{currentItem.name}</h2>
                <p>{currentItem.summary}</p>
                <ul>
                    {currentItem.keywords.map((keyword, index) => (
                        // <li key={keyword}>{keyword}</li>
                        <li key={keyword}>
                            <Tag key={index} texte={keyword} />
                        </li>
                    ))}
                </ul>
                <p>
                    <a
                        href={currentItem.url}
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        Website
                    </a>
                </p>
            </div>
            <div className="slideshow-controls">
                <Button
                    className="navBarButton navBarButton--slideShow"
                    text={leftArrow}
                    color={"rgb(133 9 9)"}
                    shadow={"0 0 3px 1px rgb(133 9 9)"}
                    onClick={handlePrevClick}
                    position={"relative"}
                    top={"45px"}
                ></Button>
                <Button
                    className="navBarButton navBarButton--slideShow"
                    text={rightArrow}
                    color={"#0749b4ff"}
                    shadow={"0 0 3px 1px rgb(133 9 9)"}
                    onClick={handleNextClick}
                    position={"relative"}
                    top={"45px"}
                ></Button>
            </div>
        </div>
    );
}

export default Slideshow;
