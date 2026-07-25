import { Col } from "react-bootstrap";
import { FaGithub, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, link, frontendLink, appLink, backendLink, briefIntro }) => {
  const openLink = (url) => (e) => {
    e.stopPropagation();
    window.open(url, "_blank");
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
      "Flutter",
      "PHP",
      "MySQL",
      "Spring Boot",
      "MongoDB",
      "Laravel",
      "TypeScript",
      "Node.js",
      "Express",
      "JWT",
      "Material-UI",
      "Query",
      "Router",
      "REST Countries API",
      "Vercel",
      "Docker",
      "REST API",
      "Postman",
      "Next.js"
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
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-intro">
          <span dangerouslySetInnerHTML={{ __html: highlightedDesc }}></span>
        </div>
        <div className="proj-txtx">
          <div className="proj-txtx-inner">
            <h4>{title}</h4>
            <p style={{ color: 'white', fontSize: '12px' }}>{briefIntro}</p>
            {(frontendLink || appLink || backendLink || link) && (
            <div className="proj-links">
              {frontendLink && (
                <button
                  type="button"
                  className="proj-link-btn"
                  title="View frontend source on GitHub"
                  onClick={openLink(frontendLink)}
                >
                  <FaLaptopCode className="proj-link-icon" />
                  <span>Frontend Code</span>
                  <FaGithub className="proj-link-icon proj-link-icon-gh" />
                </button>
              )}
              {appLink && (
                <button
                  type="button"
                  className="proj-link-btn"
                  title="View app source on GitHub"
                  onClick={openLink(appLink)}
                >
                  <FaMobileAlt className="proj-link-icon" />
                  <span>App Code</span>
                  <FaGithub className="proj-link-icon proj-link-icon-gh" />
                </button>
              )}
              {backendLink && (
                <button
                  type="button"
                  className="proj-link-btn"
                  title="View backend source on GitHub"
                  onClick={openLink(backendLink)}
                >
                  <FaServer className="proj-link-icon" />
                  <span>Backend Code</span>
                  <FaGithub className="proj-link-icon proj-link-icon-gh" />
                </button>
              )}
              {!frontendLink && !appLink && !backendLink && link && (
                <button
                  type="button"
                  className="proj-link-btn"
                  title="View source on GitHub"
                  onClick={openLink(link)}
                >
                  <FaGithub className="proj-link-icon" />
                  <span>View Code</span>
                </button>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

