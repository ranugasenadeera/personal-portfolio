import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Globe, 
  Layers,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin
} from 'lucide-react';
import colorSharp from "../assets/img/color-sharp.png";

const Profile = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { icon: <Code size={40} />, name: "React", color: "#61DAFB" },
    { icon: <Code size={40} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <Code size={40} />, name: "TypeScript", color: "#3178C6" },
    { icon: <Code size={40} />, name: "Next.js", color: "#000000" },
    { icon: <Server size={40} />, name: "Java", color: "#ED8B00" },
    { icon: <Server size={40} />, name: "Spring Boot", color: "#6DB33F" },
    { icon: <Server size={40} />, name: "Laravel", color: "#FF2D20" },
    { icon: <Database size={40} />, name: "MongoDB", color: "#47A248" },
    { icon: <Database size={40} />, name: "MySQL", color: "#4479A1" },
    { icon: <Smartphone size={40} />, name: "Flutter", color: "#02569B" },
    { icon: <Layers size={40} />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <Globe size={40} />, name: "Bootstrap", color: "#7952B3" }
  ];

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      specialization: "Specialization in Software Engineering",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      period: "Oct 2022 - Oct 2026",
      status: "Current"
    },
    {
      degree: "Advanced Level (Physical Science)",
      specialization: "Results: B (Chemistry), B (Mathematics), C (Physics)",
      institution: "Ananda College",
      period: "Jun 2019 - Feb 2022",
      status: "Completed"
    },
    {
      degree: "Ordinary Level (English Medium)",
      specialization: "Results: A8, B1 (ICT, E-Literature, Commerce)",
      institution: "Vidura College",
      period: "Jan 2007 - Dec 2018",
      status: "Completed"
    }
  ];

  const experience = [
    {
      position: "Software Engineering Intern",
      company: "Olee AI",
      period: "Aug 2025 - present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver scalable solutions and improve user experience.",
      status: "Current"
    },
    {
      position: "Software Developer Intern",
      company: "Apps Technologies",
      period: "Oct 2024 - Apr 2025",
      description: "Built and deployed multiple web and mobile applications for clients, focusing on performance, security, and responsive design using modern frameworks and cloud services.",
      status: "Completed"
    }
  ];

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className="profile" id="profile" style={{
      padding: '0 0 30px 0',
      position: 'relative'
    }}>
      <Container>
        <Row>
          <Col size={12}>
            <h2 style={{
              fontSize: '45px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#fff'
            }}>
              Professional Profile
            </h2>
            <p style={{
              color: '#B8B8B8',
              fontSize: '18px',
              letterSpacing: '0.8px',
              lineHeight: '1.5em',
              textAlign: 'center',
              marginBottom: '50px'
            }}>
              Explore my educational background, professional experience, and technical expertise in modern software development.
            </p>
          </Col>
        </Row>

        <Row md={4} xs={1} className="g-3">
          {/* Education Section */}
          <Col xs={12} md={6}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              height: '100%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{
                color: '#fff',
                fontSize: '28px',
                fontWeight: '600',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <GraduationCap size={30} />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} style={{
                  marginBottom: '30px',
                  padding: '20px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}>
                  {edu.status === 'Current' && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: '#4CAF50',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      Current
                    </div>
                  )}
                  <h5 style={{
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {edu.degree}
                  </h5>
                  {edu.specialization && (
                    <p style={{
                      color: '#B8B8B8',
                      fontSize: '14px',
                      marginBottom: '10px',
                      fontStyle: 'italic'
                    }}>
                      {edu.specialization}
                    </p>
                  )}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: '5px'
                  }}>
                    <MapPin size={16} style={{ color: '#B8B8B8' }} />
                    <span style={{ color: '#B8B8B8', fontSize: '14px' }}>
                      {edu.institution}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <Calendar size={16} style={{ color: '#B8B8B8' }} />
                    <span style={{ color: '#B8B8B8', fontSize: '14px' }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Experience Section */}
          <Col xs={12} md={6}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              height: '100%',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{
                color: '#fff',
                fontSize: '28px',
                fontWeight: '600',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Briefcase size={30} />
                Experience
              </h3>
              {experience.map((exp, index) => (
                <div key={index} style={{
                  marginBottom: '30px',
                  padding: '20px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}>
                  {exp.status === 'Current' && (
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: '#4CAF50',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      Current
                    </div>
                  )}
                  <h5 style={{
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {exp.position}
                  </h5>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: '5px'
                  }}>
                    <MapPin size={16} style={{ color: '#B8B8B8' }} />
                    <span style={{ color: '#B8B8B8', fontSize: '14px' }}>
                      {exp.company}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: '15px'
                  }}>
                    <Calendar size={16} style={{ color: '#B8B8B8' }} />
                    <span style={{ color: '#B8B8B8', fontSize: '14px' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{
                    color: '#B8B8B8',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;