import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import storyone from "../assets/images/storyone.jpg";
import storytwo from "../assets/images/storytwo.jpg";
import storythree from "../assets/images/storythree.jpg";

import "../styles/stories.css";

import articleone from "../assets/images/articleone.jpg";

import articletwo from "../assets/images/articletwo.jpg";
import articlethree from "../assets/images/articlethree.jpg";
import articlefour from "../assets/images/articlefour.jpg";




const Stories = () => {
  return (
<div style={{ minHeight: '100vh', width: '100vw', alignItems: 'center' }}>
      <Container fluid style={{ padding: 0 }} className='box0'>
        <h1 className='title'>Travel Stories</h1>
       
       
       
        <Row className='storyBox-1' style={{ height: '120vh', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '0px' }}>
          <Col className='col-4 box2' style={{ padding: 0, width: '100%'}} >
            <img src={storyone} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '120vh' }} />
          </Col>
          <Col className='col-4 box3' style={{ padding: 0, width: '100%'}} >
            <img src={storytwo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',maxHeight: '120vh'  }} />
          </Col>
          <Col className='col-4 box4' style={{ padding: 0, width: '100%' }}>
            <img src={storythree} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '120vh'  }} />
          </Col>
        </Row>



        {/* Other Rows 1*/}
  
   {/* Other Rows */}
   <Row style={{ height: '40vh', padding: '70px' }}>
  <div className="card-wrapper" style={{ margin: '10px', maxWidth: '1000px' }}>
    {/* articleBox content */}
    <Row className='articleBox' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: '15px', alignItems: 'center', padding:'15px'}}>


      <Col className='col' style={{ height: '30vh', margin: '5px' }}>
        {/* Image for the left col-4 */}
        <img src={articleone} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
      </Col>


      <Col className='col' >
        {/* Text for the right col-8 */}
        <h3>Queenstown, New Zealand</h3>
        <p>
        As I arrived in Queenstown, the adventure capital of the world, I couldn't resist the allure of trying out bungee jumping. The excitement and trepidation grew with each step towards the iconic Kawarau Bridge, where I would soon take the leap of faith. With my heart pounding, I embraced the fear and soared into the void, feeling an indescribable rush of adrenaline as I plummeted towards the water below. The thrill of bungee jumping in such a breathtaking setting made this experience one of the most unforgettable moments of my life.
        </p>
      </Col>

    </Row>
  </div>
</Row>



   {/* Other Rows 2*/}
   <Row style={{ height: '40vh', padding: '70px' }}>
  <div className="card-wrapper" style={{ margin: '10px', maxWidth: '1000px' }}>
    {/* articleBox content */}
    <Row className='articleBox' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: '15px', alignItems: 'center', padding:'15px'}}>


      <Col className='col' style={{ height: '30vh', margin: '5px' }}>
        {/* Image for the left col-4 */}
        <img src={articletwo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
      </Col>


      <Col className='col' >
        {/* Text for the right col-8 */}
        <h3> Interlaken, Switzerland</h3>
        <p>
        Surrounded by the majestic landscapes of Interlaken, I couldn't resist the call of the sky as I prepared for an exhilarating paragliding adventure. Strapping into the harness and running towards the edge, the anticipation built up inside me. Suddenly, my feet lifted off the ground, and I found myself soaring high above the Swiss Alps. The feeling of weightlessness and the panoramic views of the snow-capped peaks and serene lakes left me in awe of nature's beauty. Gliding through the crisp alpine air, I felt a sense of freedom and serenity that only paragliding could provide, making this experience an absolute highlight of my journey.
        </p>
      </Col>

    </Row>
  </div>
</Row>




   {/* Other Rows 3*/}
   <Row style={{ height: '40vh', padding: '70px' }}>
  <div className="card-wrapper" style={{ margin: '10px', maxWidth: '1000px' }}>
    {/* articleBox content */}
    <Row className='articleBox' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: '15px', alignItems: 'center', padding:'15px'}}>


      <Col className='col' style={{ height: '30vh', margin: '5px' }}>
        {/* Image for the left col-4 */}
        <img src={articlethree} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
      </Col>


      <Col className='col' >
        {/* Text for the right col-8 */}
        <h3>Moab, Utah, USA</h3>
        <p>
      Amidst the rugged landscapes of Moab, Utah, I embarked on a thrilling off-road biking expedition. Venturing into the renowned slickrock trails, the challenging terrain and steep drops tested my skills and courage to the core. The exhilaration of conquering the rocky obstacles and the stunning vistas of red sandstone cliffs made this mountain biking journey an adrenaline-fueled and visually captivating adventure.
        </p>
      </Col>

    </Row>
  </div>
</Row>







   {/* Other Rows 4 */}
   <Row style={{ height: '40vh', padding: '70px' , marginBottom: '200px'}}>
  <div className="card-wrapper" style={{ margin: '10px', maxWidth: '1000px' }}>
    {/* articleBox content */}
    <Row className='articleBox' style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: '15px', alignItems: 'center', padding:'15px'}}>


      <Col className='col' style={{ height: '30vh', margin: '5px' }}>
        {/* Image for the left col-4 */}
        <img src={articlefour} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50px' }} />
      </Col>


      <Col className='col' >
        {/* Text for the right col-8 */}
        <h3>Gold Coast, Queensland, Australia</h3>
        <p>
        A trip to the Gold Coast wouldn't be complete without experiencing the rush of jet skiing along its pristine coastline. Racing across the turquoise waters, the wind in my hair and the sea spray on my face, I felt an instant connection with the ocean. The thrill of maneuvering the jet ski at high speeds and the sense of freedom it provided made this water adventure an unforgettable and invigorating part of my journey. 
        </p>
      </Col>

    </Row>
  </div>
</Row>



































      </Container>
    </div>
  );
};

export default Stories;
