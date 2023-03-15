import React from "react";
import ContactMe from "../../components/ContactForm";
import Header from "../../components/Header";

const Contact = () => {
    return (
        <>
            <Header />
            <main className="mainWrapper mainWrapper__contactPage">
                <div className="contactContent">
                    <div className="cartoucheInsideBorderDecoration"></div>
                    <div className="titleContent">
                        <ContactMe />
                    </div>
                    <div className="decorationContent">
                        <div className="decoration">
                            <ul className="left">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="decoration--colorReverse">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <ul className="right">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;
