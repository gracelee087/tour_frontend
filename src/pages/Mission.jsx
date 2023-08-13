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
<h4>That's <strong>our mission</strong>. It has embarked on a voyage, remaining authentic to its essence – much like we do.<br />Right from the start, we've perceived travel a force for good.</h4>
<br />
<br />
<h4>More than three decades down the line, we take immense pride in being recognized as the largest adventure travel brand driven by a meaningful mission.<br /> We’re here to give back – and have a great time while traveling.</h4>
</section>




<section className='section_two'>
<br />
<h4>Our aspiration is to stand out as the finest travel company, not only globally but also in terms of its positive impact on the world.</h4>

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
<p>Our mission revolves around inspiring, innovating, disseminating, and guiding unparalleled travel experiences – benefiting both individuals and the Earth. This commitment drives us to maintain carbon neutrality since 2010, counterbalancing carbon emissions across all our trips. Moreover, our robust seven-step strategy underscores our unwavering dedication to tackling the Climate Emergency head-on. Pioneering the way, we stand as the first global tour operator to establish verifiable science-driven goals through the Science Based Targets initiative, aimed at limiting global temperature increase to 1.5°C within the next decade. Our primary focus remains on discovering effective solutions to these challenges.</p>
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
<p>Our purpose is intrinsically linked to our product – that being our travel experiences. Our focus is on sustainable and immersive travel, utilizing our trips as a catalyst for positive impact as well as enjoyable moments. We hold genuine connections to the places we visit, the people we encounter, and the communities at the heart of every Intrepid adventure. Our perspective is global, our actions are local, and our engagement is personal.
From embracing community-based tourism to introducing new experiences that support indigenous communities globally, we've been diligently reworking our itineraries to reduce carbon emissions and increase positive effects. With our exceptional local guides at the forefront, we are a global collective with a local core. Venture out and experience it for yourself.</p>
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
<p>Our mission is directly intertwined with our product – in this case, our travel journeys. Our primary focus lies in promoting sustainable and immersive travel encounters. This involves harnessing our trips to drive positive change alongside creating enjoyable memories. We hold authentic connections and a vested interest in the destinations we explore, the individuals we encounter en route, and the communities that form the core of every Intrepid experience. Our approach is one of global awareness, local action, and personal engagement.
From embracing community-centered tourism to introducing novel experiences that support Indigenous communities and First Nations worldwide, we've been meticulously refining our itineraries to reduce our carbon footprint and amplify our influence. With our exceptional local leaders taking the lead, we form a worldwide community with a strong local foundation. Embark on these adventures and witness it firsthand.</p>
</Col>
</Row>
</Container>





    </div>
  );
}

export default Mission;
