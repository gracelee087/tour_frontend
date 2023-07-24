import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import experienceImg from "../assets/images/experience.jpg";
   

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========== hero section start =========== */}
      <section className='hero__container'>
      <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Ready To Travel"} />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <p className='home-letter'>
                Unleash your inner adventurer with our extreme sports website! Skydiving, rafting, and more - dare to experience the thrill today!!
              
                </p>
              </div>
            </Col>



            
            <Col lg="2">
            <div className="hero__img-box background-image-container">
                {/* <video src={heroVideo} alt="" autoPlay muted loop /> */}
                {/* <img src={missionone} className="background-image" alt="" /> */}

              </div>
            </Col>


            <SearchBar />


          </Row>


        </Container>

      </section>

      
      {/* ========== hero section start =========== */}

      {/* ============ featured tour section start ============ */}
      <section>

        



        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      {/* ============ experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
              
                  <br />
                  Many customers are highly satisfied with our services.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ experience section end ============= */}

      {/* ============ testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ testimonial section end ========== */}
      <Newsletter />
    </>
  );
};

export default Home;
