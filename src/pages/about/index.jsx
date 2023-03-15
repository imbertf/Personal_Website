import React from "react";
import Header from "../../components/Header";
import profilPicture from "../../medias/images/profil.jpg";
import AnimatedLetter from "../../components/AnimatedLetters";

const About = () => {
    return (
        <>
            <Header />
            <main>
                <div className="aboutContent">
                    <div className="aboutContent__txt">
                        <div className="aboutContent__img">
                            <img src={profilPicture} alt="Florian IMBERT" />
                        </div>
                        <AnimatedLetter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                strings: ["Says : Hello there, I m Flo !"],
                                pauseFor: 5500,
                            }}
                        />
                        <h1 className="h1__mobile">
                            Pnj says: Hello there! I'm Flo
                        </h1>
                        <p>
                            Front end web developer based in Orléans, France. I
                            am excited to introduce myself and highlight my
                            skills technologies such as React, Javascript, HTML,
                            CSS with Sass preprocessor.
                            <br />
                            <br />
                            As Web development enthusiast, I have learned how to
                            create high-quality user interfaces and engaging web
                            applications using these skills. My expertise in
                            these technologies allows me to build dynamic,
                            responsive, and interactive web pages that are both
                            functional and visually appealing.
                            <br />
                            <br />
                            Apart from my technical skills, I bring to the table
                            my experience as a team lead in the French Air Force
                            and Supply chain. With my 6 years of military
                            experience and 4 years at Amazon, I am well-versed
                            in team management, planning, and formation
                            scheduling, which enables me to work effectively in
                            team settings. I value strong relationships with my
                            colleagues and believe that great teamwork leads to
                            great results.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
