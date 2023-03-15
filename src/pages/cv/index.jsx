import React from "react";
import Header from "../../components/Header";
import AnimatedLetter from "../../components/AnimatedLetters";
import data from "../../medias/datas/cv.json";
import Tag from "../../components/Tag";
import ScrollButton from "../../components/Buttons/ScrollTopButton";
import DownloadFileButton from "../../components/Buttons/DownloadFileButton";

const Cv = () => {
    const basics = data.basics;
    const profiles = basics.profiles;
    const work = data.work;
    const education = data.education;
    const skills = data.skills;
    const languages = data.languages;
    const interests = data.interests;
    const projects = data.projects;
    const openclassroomsProjects = data.openclassroomsProjects;

    return (
        <>
            <Header />
            <main className="mainWrapper">
                <div className="cvContent">
                    <div className="titleContent">
                        <AnimatedLetter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: "natural",
                                strings: ["Web developer junior"],
                                pauseFor: 5500,
                            }}
                        />
                        <div className="circle">
                            <div className="circle__background"></div>
                        </div>
                    </div>

                    <section>
                        <h2>Contact</h2>
                        <h3>{basics.name}</h3>
                        <ul>
                            <li>{basics.email}</li>
                            <li>{basics.phone}</li>
                            <li>
                                <a
                                    href={basics.url}
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    {basics.url}
                                </a>
                            </li>
                            <li>{basics.location.city}</li>
                        </ul>
                        {profiles.map((element, index) => (
                            <ul key={`${element}-${index}`}>
                                <li style={{ color: "#546a76" }}>
                                    {element.network}
                                </li>
                                <li>{element.username}</li>
                                <li>
                                    <a
                                        href={element.url}
                                        rel="noreferrer noopener"
                                        target="_blank"
                                    >
                                        Website
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </section>
                    <section>
                        <h2>Experiences</h2>
                        {work.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.name}
                                </h3>
                                <ul>
                                    <li>{element.position}</li>
                                    <li>{element.startDate}</li>
                                    <li>{element.endDate}</li>
                                    <li>{element.summary}</li>
                                    <li>{element.highlights}</li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>Education</h2>
                        {education.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.institution}
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            href={element.url}
                                            rel="noreferrer noopener"
                                            target="_blank"
                                        >
                                            Website
                                        </a>
                                    </li>
                                    <li>{element.area}</li>
                                    <li>{element.studyType}</li>
                                    <li>{element.startDate}</li>
                                    <li>{element.endDate}</li>
                                    <li>
                                        <div className="tagContent">
                                            {element.courses.map(
                                                (tag, index) => (
                                                    <Tag
                                                        key={index}
                                                        texte={tag}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>Skills</h2>
                        {skills.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.name}
                                </h3>
                                <ul>
                                    <li>
                                        <div className="tagContent">
                                            {element.keywords.map(
                                                (tag, index) => (
                                                    <Tag
                                                        key={index}
                                                        texte={tag}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>Languages</h2>
                        {languages.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.language}
                                </h3>
                                <p>{element.fluency}</p>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>Interests</h2>
                        {interests.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.name}
                                </h3>
                                <ul>
                                    <li>
                                        <div className="tagContent">
                                            {element.keywords.map(
                                                (tag, index) => (
                                                    <Tag
                                                        key={index}
                                                        texte={tag}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>Projects</h2>
                        {projects.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.name}
                                </h3>
                                <ul>
                                    <li>{element.description}</li>
                                    <li>{element.keywords}</li>
                                    <li>{element.startDate}</li>
                                    <li>{element.endDate}</li>
                                    <li>
                                        <a
                                            href={element.url}
                                            rel="noreferrer noopener"
                                            target="_blank"
                                        >
                                            Website
                                        </a>
                                    </li>
                                    <li>
                                        <div className="tagContent">
                                            {element.roles.map((tag, index) => (
                                                <Tag key={index} texte={tag} />
                                            ))}
                                        </div>
                                    </li>
                                    <li>{element.type}</li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <section>
                        <h2>OpenClassrooms projects</h2>
                        {openclassroomsProjects.map((element, index) => (
                            <>
                                <h3 key={`${element}-${index}`}>
                                    {element.name}
                                </h3>
                                <ul>
                                    <li>{element.description}</li>
                                    <li>
                                        <div className="tagContent">
                                            {element.keywords.map(
                                                (tag, index) => (
                                                    <Tag
                                                        key={index}
                                                        texte={tag}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                    <li>{element.startDate}</li>
                                    <li>{element.endDate}</li>
                                    <li>
                                        <a
                                            href={element.url}
                                            rel="noreferrer noopener"
                                            target="_blank"
                                        >
                                            Website
                                        </a>
                                    </li>
                                    <li>
                                        <div className="tagContent">
                                            {element.roles.map((tag, index) => (
                                                <Tag key={index} texte={tag} />
                                            ))}
                                        </div>
                                    </li>
                                    <li>{element.type}</li>
                                </ul>
                            </>
                        ))}
                    </section>
                    <div className="footerButton">
                        <ScrollButton />
                        <DownloadFileButton />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cv;
