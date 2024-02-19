/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
/**
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
<img className="background" src={image} alt={imageAltText} />
**/
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Computer Science & Engineering student at North South University Passionate on Software Engineering.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "C programming",
  "C++ programming",
  "Python programming",
  "Java programming",
  "Git & GitHub",
  "Data Structures & Algorithms",
  "Problem Solving",
  "Object Oriented Programming",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Automation Scripting",
  "Trouble Shooting & Debugging",
  "Version Control",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm Passionate about Software Engineering. Here you'll find a collection of projects and contributions that reflect my journey in the world of technology and beyond.";

const About = () => {
  return (
    <section className="padding" id="about">
      
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          padding: "5rem",
          margin: "1rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Skills</h2>
        <br></br>
        <br></br>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "0rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
