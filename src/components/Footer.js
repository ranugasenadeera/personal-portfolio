import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import lgo from '../assets/img/lgo.png';
import icons8 from '../assets/img/icons8.svg';
import icons9 from '../assets/img/icons9.svg';
import icons10 from '../assets/img/icons10.svg';
import icons11 from '../assets/img/icons11.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={lgo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://linkedin.com/in/ranugasenadeera"><img src={icons8} alt="" /></a>
                <a href="https://github.com/ranugasenadeera"><img src={icons9} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=61558634829047"><img src={icons10} alt="" /></a>
                <a href="https://www.instagram.com/ranuga_geeneth"><img src={icons11} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
