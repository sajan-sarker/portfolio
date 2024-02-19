import React from "react";

import image from "../images/smotion-background.jpg";

const imageAltText = "purple and blue abstract background";

const university = "North South University, Dhaka, Bangladesh ";
const college = "Nawab Habibullah Model School & College, Dhaka, Bangladesh"
const school = "Baunia Abdul Jalil High School, Dhaka, Bangladesh"
const u_details =  ['Bachelor of Science in Computer Science and Engineering (BSCSE)', 'February 2021 - Present', 'CGPA- 2.82'];
const c_details =  ['Higher Secondary Certificate (HSC) - Science','May 2017 - July 2019','GPA- 4.67'];
const s_details =  ['Secondary School Certificate (SSC) - Science','January 2015 - April 2017','GPA- 4.68'];
const Education = () => {
    return (
        <section className="light" id="education">
        
        <div
        style={{
            backgroundColor: "white",
            width: "60%",
            padding: "5rem",
            margin: "0rem auto",
            textAlign: "center",
        }}
        >
        <h2>Education</h2>
        <p className="large">{university}</p>
        <hr />
        <ul
            style={{
                textAlign: "left",
                fontSize: "1.25rem",
                margin: "0rem 0rem",
                gap: "0rem",
            }}
        >
            {u_details.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        <hr />
        <p className="large">{college}</p>
        <hr />
        <ul
            style={{
                textAlign: "left",
                fontSize: "1.25rem",
                margin: "0rem 0rem",
                gap: "0rem",
            }}
        >
            {c_details.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        <hr />
        <p className="large">{school}</p>
        <hr />
        <ul
            style={{
                textAlign: "left",
                fontSize: "1.25rem",
                margin: "0rem 0rem",
                gap: "0rem",
            }}
        >
            {s_details.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        </div>
    </section>
    );
};

export default Education;