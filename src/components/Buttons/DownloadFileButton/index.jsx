import React from "react";
import Button from "../index";

const DownloadFileButton = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("imbert_florian_cv_2023.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "imbert_florian_cv_2023.pdf";
                alink.click();
            });
        });
    };
    return (
        <Button
            className="navBarButton"
            text={"PDF"}
            color={"#432b4f"}
            shadow={"5px 5px 0px #2E2321"}
            onClick={onButtonClick}
        />
    );
};

export default DownloadFileButton;
