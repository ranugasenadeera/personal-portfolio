import { useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  useEffect(() => {
    // No clearFields needed since email state is removed
  }, [status])

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={12}>
              <h3>"Life’s short – Be the reason someone smiles today 😊"</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
          </Row>
        </div>
      </Col>
  )
}
