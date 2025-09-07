import React, { useRef } from "react";
import { FaReact, FaJsSquare, FaBootstrap, FaJava, FaLaravel } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiSpringboot, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { TbBrandNextjs } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add navigation icons

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };

  const iconStyle = {
    marginBottom: "24px",
  };

  const carouselRef = useRef();

  // Auto slide to next skill every 3 seconds
  // You can adjust the timeout as needed
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container" style={{ backdropFilter: 'blur(20px)', }}>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{ position: "relative" }}>
              <h2>Skills</h2>
              <p>Proficient in both front-end and back-end development, with expertise in creating responsive and dynamic web applications.</p>
              {/* Left navigation icon */}
              <button
                className="btn btn-dark d-flex align-items-center justify-content-center position-absolute rounded-circle"
                style={{ top: "70%", left: "30px", transform: "translateY(-50%)", width: "40px", height: "40px", zIndex: 2 }}
                onClick={() => carouselRef.current && carouselRef.current.previous()}
                aria-label="Previous"
              >
                <FaChevronLeft color="#fff" size={24} />
              </button>
              {/* Right navigation icon */}
              <button
                className="btn btn-dark d-flex align-items-center justify-content-center position-absolute rounded-circle"
                style={{ top: "70%", right: "30px", transform: "translateY(-50%)", width: "40px", height: "40px", zIndex: 2 }}
                onClick={() => carouselRef.current && carouselRef.current.next()}
                aria-label="Next"
              >
                <FaChevronRight color="#fff" size={24} />
              </button>
              <Carousel
                ref={carouselRef}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-10-px"
                arrows={false} // Hide default arrows
              >
                <div className="item">
                  <FaJava size={80} color="#007396" style={iconStyle} />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <TbBrandNextjs size={80} color="#696868ff" style={iconStyle} />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <FaReact size={80} color="#61DBFB" style={iconStyle} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <SiTypescript size={80} color="#3178C6" style={iconStyle} />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <FaJsSquare size={80} color="#F7DF1E" style={iconStyle} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <RiTailwindCssFill size={80} color="#38B2AC" style={iconStyle} />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <FaBootstrap size={80} color="#7952B3" style={iconStyle} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <SiMysql size={80} color="#00758F" style={iconStyle} />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <SiMongodb size={80} color="#47A248" style={iconStyle} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <FaLaravel size={80} color="#FF2D20" style={iconStyle} />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <SiSpringboot size={80} color="#6DB33F" style={iconStyle} />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <FaFlutter size={80} color="#02569B" style={iconStyle} />
                  <h5>Flutter</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
