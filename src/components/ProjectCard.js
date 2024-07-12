import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, description, imgUrl, link, briefIntro }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  const highlightTechnologies = (text) => {
    if (!text) return ""; // Return an empty string if text is undefined or null

    const technologies = [
      "MERN Stack",
      "React",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "Java",
      "Tailwind CSS",
      "MYSQL",
      "ASP.NET Core",
      "C#",
      "CSS",
      "Microsoft SQL Server",
      "Kotlin",
      "Room Database",
      "Animate.",
      "Animate.CSS",
      "EmailJS",
    ];

    // Highlight technologies with a suitable background color
    technologies.forEach((tech) => {
      const regex = new RegExp(`(${tech})`, "gi");
      text = text.replace(regex, `<span class="highlight">${tech}</span>`);
    });

    return text;
  };

  const highlightedDesc = highlightTechnologies(description);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-intro">
          <span dangerouslySetInnerHTML={{ __html: highlightedDesc }}></span>
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p style={{ color: 'white', fontSize: '12px' }}>{briefIntro}</p>
        </div>
      </div>
    </Col>
  );
};

