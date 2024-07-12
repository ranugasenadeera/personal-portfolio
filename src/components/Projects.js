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
      briefIntro: "This System automates employee management, customer loyalty, tax filing, and staff training. It serves key roles like cashier, logistic manager, staff manager, coordinator, finance manager, and system admin for enhanced efficiency and customer satisfaction.",
    },
    {
      title: "Online Gaming Site",
      description: "Developed Customer support function with login page using Java, HTML, CSS, JavaScript and MYSQL",
      imgUrl: gaming,
      link: 'https://github.com/ranugasenadeera/OOP-Project',
      briefIntro: "The site offers game purchase and download functionalities, including browsing, transactions, and customer support via ticketing. Roles include product management for game listings and admin oversight for approval and payment security.",
    },
    {
      title: "Student Management System",
      description: "Developed the Student Portal using ASP.NET Core, C#, HTML, CSS, JavaScript, Tailwind CSS and Microsoft SQL Server",
      imgUrl: student,
      link: 'https://github.com/ranugasenadeera/Student-Management-System',
      briefIntro: "This System efficiently manages student details and includes essential pages like About, Privacy Policy, and Student Add/Edit functionality, ensuring administrative support and seamless user experience.",
    },
    {
      title: "My Portfolio",
      description: "Developed my personal portfolio using React, Bootstrap, Animate.CSS, EmailJS and JavaScript, showcasing my skills, projects, and contact information",
      imgUrl: portfolio,
      link: 'https://github.com/ranugasenadeera/personal-portfolio',
      briefIntro: "This portfolio showcases my projects and skills in web and mobile development, highlighting my expertise in design and functionality. It features project descriptions, technical details, and contact information for potential collaborations.",
    },
  ];

  const projects2 = [
    {
      title: "Task Tracker App",
      description: "Developed Task Tracker mobile app using Kotlin and Room Database",
      imgUrl: task,
      link: 'https://github.com/ranugasenadeera/Mobile-CRUD-App',
      briefIntro: "The app is a robust task management application that enables efficient task organization and tracking. Users can seamlessly add, edit, view, and delete tasks, manage details, and utilize a user-friendly interface for enhanced productivity.",
    },
    {
      title: "Rapid Lane",
      description: "Developed a simple Car game using Kotlin with some special features",
      imgUrl: car,
      link: 'https://github.com/ranugasenadeera/Car-Game',
      briefIntro: "This is a car game where players navigate a red car across lanes, avoiding collisions with oncoming yellow cars. Players control the red car using touch input (left or right), while yellow cars move down the screen from three different lanes at varying speeds.",
    },
  ];

  const projects3 = [
    {
      title: "Organic Product Management System",
      description: "Will be developed using ASP.NET Core, C#, JavaScript, and a frontend framework",
      imgUrl: organic,
      link: 'https://github.com/ranugasenadeera/Organic-Product-Management-System',
      briefIntro: "A system still in development state for managing organic products effectively and efficiently.",
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
                  <p>Explore my diverse portfolio showcasing innovative web applications and dynamic mobile solutions. Each project highlights my expertise in full-stack development, emphasizing user-centric design and robust functionality.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" style={{ cursor: "pointer" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Coming Soon</Nav.Link>
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
