import { Container, Row, Col } from "react-bootstrap";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin
} from 'lucide-react';

const Profile = () => {
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
      company: "Olee AI - Malabe (Onsite)",
      status: "Current",
      roles: [
        {
          position: "Associate Software Engineer",
          period: "Feb 2026 - Present",
          description: "Lead architecture planning, database design, and backend development using Node.js and Express, alongside frontend applications built with Next.js and TypeScript. Collaborate with cross-functional teams to deliver scalable solutions and drive improvements in user experience.",
          current: true
        },
        {
          position: "Software Engineering Intern",
          period: "Aug 2025 - Feb 2026",
          description: "Contributed to architecture planning and database design, developed backend APIs and services using Node.js and Express, and built frontend applications using Next.js with TypeScript. Collaborated with cross-functional teams to deliver scalable solutions and improve user experience.",
          current: false
        }
      ]
    },
    {
      company: "Apps Technologies - Remote",
      status: "Completed",
      roles: [
        {
          position: "Software Developer Intern",
          period: "Oct 2024 - Apr 2025",
          description: "Built and maintained web applications using PHP (Laravel), focusing on performance, security, and responsive design using modern frameworks and technologies.",
          current: false
        }
      ]
    }
  ];

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
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: '20px',
              padding: '30px',
              height: '100%',
              backdropFilter: 'blur(20%)',
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
              background: 'rgba(255, 255, 255, 0.06)',
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginBottom: exp.roles.length > 1 ? '20px' : '5px'
                  }}>
                    <MapPin size={16} style={{ color: '#B8B8B8' }} />
                    <span style={{ color: '#B8B8B8', fontSize: '14px', fontWeight: '500' }}>
                      {exp.company}
                    </span>
                  </div>

                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} style={{ position: 'relative' }}>
                      {exp.roles.length > 1 && (
                        <div style={{
                          position: 'absolute',
                          left: '7px',
                          top: roleIndex === 0 ? '18px' : '0',
                          bottom: roleIndex === exp.roles.length - 1 ? 'auto' : '0',
                          height: roleIndex === exp.roles.length - 1 ? '18px' : '100%',
                          width: '2px',
                          background: 'rgba(255,255,255,0.15)'
                        }} />
                      )}
                      <div style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: roleIndex < exp.roles.length - 1 ? '20px' : '0'
                      }}>
                        {exp.roles.length > 1 && (
                          <div style={{ flexShrink: 0, paddingTop: '2px' }}>
                            <div style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              background: role.current ? '#4CAF50' : 'rgba(255,255,255,0.2)',
                              border: role.current ? '2px solid #4CAF50' : '2px solid rgba(255,255,255,0.3)',
                              boxShadow: role.current ? '0 0 8px rgba(76,175,80,0.5)' : 'none',
                              position: 'relative',
                              zIndex: 1
                            }} />
                          </div>
                        )}
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                            <h5 style={{
                              color: '#fff',
                              fontSize: '16px',
                              fontWeight: '600',
                              margin: 0
                            }}>
                              {role.position}
                            </h5>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            marginBottom: '8px'
                          }}>
                            <Calendar size={13} style={{ color: '#B8B8B8' }} />
                            <span style={{ color: '#B8B8B8', fontSize: '13px' }}>
                              {role.period}
                            </span>
                          </div>
                          <p style={{
                            color: '#B8B8B8',
                            fontSize: '13px',
                            lineHeight: '1.6',
                            margin: '0'
                          }}>
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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