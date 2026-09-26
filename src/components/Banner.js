import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import pic from "../assets/img/pic.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [
      "Associate Software Engineer",
      "Full Stack Developer",
    ];

    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <span className="tagline">
                    Welcome to my Portfolio
                  </span>

                  <h1 style={{ minHeight: "10.0rem" }}>
                    {`Hi! I'm Ranuga Senadeera, `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[
                        "Associate Software Engineer",
                        "Full Stack Developer"
                      ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Associate Software Engineer at Olee AI and a Software
                    Engineering graduate from SLIIT, passionate about
                    building reliable, scalable, and user-focused
                    applications. Experienced in full-stack web development
                    using Next.js, TypeScript, React, Node.js, and
                    Express.js, with additional experience in Java
                    (Spring Boot), Flutter, PHP (Laravel), .NET, SQL, and
                    MongoDB.
                  </p>

                  <button
                    onClick={() =>
                      document
                        .getElementById("connect")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img
                    className="mt-5 rounded-circle"
                    src={pic}
                    alt="Ranuga Senadeera"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};