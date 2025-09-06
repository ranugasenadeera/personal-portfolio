import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ERM from "../assets/img/ERM.png";
import student from "../assets/img/student.png";
import portfolio from "../assets/img/portfolio.png";
import car from "../assets/img/car.png";
import task from "../assets/img/task.png";
import organic from "../assets/img/organic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import mindwell from "../assets/img/mindwell.png";
import finance from "../assets/img/finance.png";
import mealer from "../assets/img/mealer.png";
import country from "../assets/img/country.png";
import hospital from "../assets/img/hospital.png";
import sales from "../assets/img/sales.png";
import mail from "../assets/img/mail.png";

export const Projects = () => {

  const projects1 = [
    {
      title: "Finance Tracker System",
      description: "Technologies: Spring Boot(Java), MongoDB, Next.js, Tailwind CSS, JWT, REST API, Postman",
      imgUrl: finance,
      link: 'https://github.com/ranugasenadeera/Finance-Tracker-System',
      briefIntro: "A personal finance tracker app to monitor expenses, set budgets, analyze trends, and generate reports. Responsive frontend with secure backend integration.",
    },
    {
      title: "Food Order & Delivery App",
      description: "Technologies: Spring Boot(Java), React, Docker, JWT, MySQL, REST API, Tailwind CSS",
      imgUrl: mealer,
      link: 'https://github.com/ranugasenadeera/Food-Order-Delivery-App',
      briefIntro: "A food delivery platform for customers, restaurants and delivery personnel, featuring order management, delivery tracking, and menu administration with separate admin panel.",
    },
    {
      title: "CountrySnap",
      description: "Technologies: React, Tailwind CSS, React Query, React Router, REST Countries API, Vercel",
      imgUrl: country,
      link: 'https://github.com/ranugasenadeera/CountrySnap',
      briefIntro: "Built a responsive web app to search, view, and bookmark country data with user authentication and seamless UX. Integrated REST Countries API and managed data fetching and caching efficiently using React Query.",
    },
    {
      title: "Hospital Management System",
      description: "Technologies: PHP (Laravel), JavaScript, Bootstrap, MySQL",
      imgUrl: hospital,
      link: 'https://github.com/ranugasenadeera/Hospital-Management-System',
      briefIntro: "Built a comprehensive hospital management platform with patient appointment booking, medical history tracking, report access, and online payments, reducing manual workload by 25%. Integrated patient management and CRM improving hospital efficiency by 20%.",
    },
    {
      title: "Sales Optimiser",
      description: "Technologies: PHP (Laravel), JavaScript, Bootstrap, MySQL",
      imgUrl: sales,
      link: 'https://github.com/ranugasenadeera/Sales-Optimiser',
      briefIntro: "Developed a Sales Optimiser using Laravel with a comprehensive bill management system including discounts and loyalty points, improving billing accuracy by 15%. Integrated a dynamic sales dashboard for real-time performance insights, boosting sales productivity by 10%.",
    },
    {
      title: "ERM System",
      description: "Technologies: MERN Stack, Bootstrap, JavaScript and HTML",
      imgUrl: ERM,
      link: 'https://github.com/ranugasenadeera/ERMsystem',
      briefIntro: "This System automates employee management, customer loyalty, tax filing, and staff training. It serves key roles like cashier, logistic manager, staff manager, coordinator, finance manager, and system admin for enhanced efficiency and customer satisfaction.",
    },
    {
      title: "Student Management System",
      description: "Technologies: ASP.NET Core, C#, HTML, CSS, JavaScript, Tailwind CSS, Microsoft SQL Server",
      imgUrl: student,
      link: 'https://github.com/ranugasenadeera/Student-Management-System',
      briefIntro: "This System efficiently manages student details and includes essential pages like About, Privacy Policy, and Student Add/Edit functionality, ensuring administrative support and seamless user experience.",
    },
    {
      title: "My Portfolio",
      description: "Technologies: React, Bootstrap, Animate.CSS, EmailJS, JavaScript",
      imgUrl: portfolio,
      link: 'https://github.com/ranugasenadeera/personal-portfolio',
      briefIntro: "This portfolio showcases my projects and skills in web and mobile development, highlighting my expertise in design and functionality. It features project descriptions, technical details, and contact information for potential collaborations.",
    },
  ];

  const projects2 = [
    {
      title: "Mental Health App",
      description: "Technologies: Flutter, PHP, Bootstrap, and MySQL",
      imgUrl: mindwell,
      link: 'https://github.com/ranugasenadeera/Mental-Health-App',
      briefIntro: "A mobile app for tracking mental health, featuring mood and sleep tracking, meditation sessions, and blog suggestions to support user well-being.",
    },
    {
      title: "Task Tracker App",
      description: "Technologies: Kotlin and Room Database",
      imgUrl: task,
      link: 'https://github.com/ranugasenadeera/Mobile-CRUD-App',
      briefIntro: "A robust task management application that enables users to efficiently organize, add, edit, view, and delete tasks, enhancing productivity with a user-friendly interface.",
    },
    {
      title: "Rapid Lane",
      description: "Technologies: Kotlin",
      imgUrl: car,
      link: 'https://github.com/ranugasenadeera/Car-Game',
      briefIntro: "A car game where players navigate a red car across lanes, avoiding collisions with oncoming yellow cars. Players use touch controls to steer and experience varying speeds and lane challenges.",
    },
  ];

  const projects3 = [
    {
      title: "Public Email API Service",
      description: "Technologies: Next.js, Spring Boot(Java), MongoDB, Tailwind CSS, TypeScript, REST API",
      imgUrl: mail,
      link: 'https://github.com/ranugasenadeera/Public-Email-API-Service',
      briefIntro: "An Email service (still under development) to allow users to send bulk emails, track job statuses, and manage API keys with ease",
    }
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
