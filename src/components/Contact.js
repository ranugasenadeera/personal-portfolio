import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const [formDetails, setFormDetails] = useState({
    from_first_name: '',
    from_last_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_ij7ppxg', 'template_19cwm9s', form.current, '9oMwPH93j1y7yvytt')
      .then(() => {
        setButtonText("Send");
        setFormDetails({
          from_first_name: '',
          from_last_name: '',
          from_email: '',
          from_phone: '',
          message: ''
        });
        setStatus({ success: true });
        setTimeout(() => {
          setStatus({});
        }, 3000); // Clear status message after 3 seconds
      })
      .catch((error) => {
        setButtonText("Send");
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        setTimeout(() => {
          setStatus({});
        }, 3000); // Clear status message after 3 seconds
        console.log('FAILED...', error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={`rounded-circle ${isVisible ? "animate__animated animate__zoomIn" : ""}`} src={contact} alt="Contact Us" style={{ width: '500px', height: 'auto' }} />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="from_first_name" value={formDetails.from_first_name} placeholder="First Name" onChange={(e) => onFormUpdate('from_first_name', e.target.value)} required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="from_last_name" value={formDetails.from_last_name} placeholder="Last Name" onChange={(e) => onFormUpdate('from_last_name', e.target.value)} required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="from_email" value={formDetails.from_email} placeholder="Email Address" onChange={(e) => onFormUpdate('from_email', e.target.value)} required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="from_phone" value={formDetails.from_phone} placeholder="Phone No." onChange={(e) => onFormUpdate('from_phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                          <button className="vvd rounded-pill" type="submit" style={{ zIndex: 1 }}><span>{buttonText}</span></button>
                          {status.success && <p style={{ color: 'white', zIndex: 1, marginTop: '40px', marginLeft: '20px' }}>Message sent successfully</p>}
                          {status.message && <p style={{ color: 'white', zIndex: 1, marginTop: '10px', marginLeft: '20px' }}>{status.message}</p>}
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
