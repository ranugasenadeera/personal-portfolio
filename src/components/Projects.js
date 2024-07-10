import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ERM from "../assets/img/ERM.png";
import gaming from "../assets/img/gaming.png";
import student from "../assets/img/student.png";
import portfolio from "../assets/img/portfolio.png";
import car from "../assets/img/car.png";
import task from "../assets/img/task.png";
import organic from "../assets/img/organic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "ERM System",
      description: "Developed the Finance Management function using MERN Stack, Bootstrap, JavaScript and HTML",
      imgUrl: ERM,
      link: 'https://github.com/ranugasenadeera/ERMsystem',
    },
    {
      title: "Online Gaming Site",
      description: "Developed Customer support function using Java, HTML, CSS, JavaScript and MYSQL",
      imgUrl: gaming,
      link: 'https://github.com/ranugasenadeera/OOP-Project',
    },
    {
      title: "Student Management System",
      description: "Developed the Student Portal using ASP.NET Core, C#, HTML, CSS, JavaScript, Tailwind CSS, Microsoft SQL Server",
      imgUrl: student,
      link: 'https://github.com/ranugasenadeera/Student-Management-System',
    },
    {
      title: "My Portfolio",
      description: "Developed my personal portfolio using React, Bootstrap, Animate.CSS, EmailJS and JavaScript, showcasing my skills, projects, and contact information",
      imgUrl: portfolio,
      link: 'https://github.com/ranugasenadeera/personal-portfolio',
    },
  ];

  const projects2 = [
    {
      title: "Task Manager App",
      description: "Developed Task manager mobile app using Kotlin and Room Database",
      imgUrl: task,
      link: 'https://github.com/ranugasenadeera/Mobile-CRUD-App',
    },
    {
      title: "Car Game",
      description: "Developed a simple Car game using Kotlin",
      imgUrl: car,
      link: 'https://github.com/ranugasenadeera/Car-Game',
    },
  ];

  const projects3 = [
    {
      title: "Organic Product Management System",
      imgUrl: organic,
      link: 'https://github.com/ranugasenadeera/Organic-Product-Management-System',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my diverse portfolio showcasing innovative web applications and dynamic mobile solutions. Each project highlights my expertise in full-stack development, emphasizing user-centric design and robust functionality. Discover how I tackle complex challenges with creativity and precision.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" style={{ cursor: "pointer" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Pending</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
