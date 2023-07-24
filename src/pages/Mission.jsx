import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "../styles/mission.css";
import missionone from "../assets/images/missionone.jpg";
import missiontwo from "../assets/images/missiontwo.jpg";
import missionthree from "../assets/images/missionthree.jpg";



function Mission() {
  return (
    <div>
      <section className="mission_hero">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-container">
                <h1>Our Purpose & Mission</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

<section className='mission_one'>
<br />
<br />
<h3>Create positive change through the joy of travel.
</h3>
 <br />
 <br />
<h4>That's <strong>our mission</strong>. It’s been on a journey, while staying true to itself – just like us.<br />Since the very beginning we’ve seen travel as a force for good.</h4>
<br />
<br />
<h4>Over 30 years later, we’re super proud to call ourselves the world’s largest purpose-led adventure travel brand. <br /> We’re here to give back – and have a great time while doing it.</h4>
</section>




<section className='section_two'>
<br />
<h4>We want to be the best travel company not just in the world, but for the world.</h4>

<br />
<h4>We do this in lots of different ways. <br /> <br />Here are just some of the headlines:</h4>
<br />
</section>



{/* 그림상자 */}


<div className="divider"></div>

<Container className='section_three'>
<Row>
<Col>
<img src={missionone} alt="" />
</Col>
<Col>
<h2>CLIMATE ACTION</h2>
<p>Our purpose is to inspire, create, share and lead the best travel experiences ever – for both people and the planet. That's why we’ve been carbon-neutral since 2010, carbon offset all our trips, and have a seven-point commitment plan that supports our Climate Emergency declaration. We are the first global tour operator with verifiable science-based targets through the Science Based Targets initiative, to limit global warming to 1.5C in the next decade. We’re here to find solutions.</p>
</Col>
</Row>
</Container>


<div className="divider"></div>

<Container className='section_four'>
<Row>
<Col>
<img src={missiontwo} alt="" />
</Col>
<Col>
<h2>COMMUNITIES WE VISIT</h2>
<p>Our purpose is totally tied to our product (that's our trips). We're all about sustainable, experience-rich travel. That means using our trips as a force for good, as well as good times. We're genuinely connected to and invested in the places we go, the people we meet along the way, and the communities at the heart of every Intrepid experience. We think globally, act locally, and engage personally.
From Community-based tourism to new experiences that support First Nations and Indigenous communities around the world, we’ve been retooling our itineraries to dial back the carbon and dial up the impact. With our legendary local leaders out front, we’re a global collective, local at heart. Get out there and see it..</p>
</Col>
</Row>
</Container>



<div className="divider"></div>

<Container className='section_five'>
<Row>
<Col>
<img src={missionthree} alt="" />
</Col>
<Col>
<h2>COMMUNITIES WE VISIT</h2>
<p>Our purpose is totally tied to our product (that's our trips). We're all about sustainable, experience-rich travel. That means using our trips as a force for good, as well as good times. We're genuinely connected to and invested in the places we go, the people we meet along the way, and the communities at the heart of every Intrepid experience. We think globally, act locally, and engage personally.
From Community-based tourism to new experiences that support First Nations and Indigenous communities around the world, we’ve been retooling our itineraries to dial back the carbon and dial up the impact. With our legendary local leaders out front, we’re a global collective, local at heart. Get out there and see it..</p>
</Col>
</Row>
</Container>





    </div>
  );
}

export default Mission;
