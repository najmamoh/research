import React from "react";
import { Container, Row, Col, Card} from 'react-bootstrap';

export const Services = (props) => {
  const consultancies = [
    {
      title: 'Strategic consultancy',
      description: 'Assist organizations to develop strategies that meet their objectives and help them progress effectively',
      imgSrc: '/12.jpg' // Replace with your image path
    },
    {
      title: 'Technical consultancy',
      description: 'Help organizations to improve their operations and enhance efficiency',
      imgSrc: '/123.jpg' // Replace with your image path
    },
    {
      title: 'Research consultancy',
      description: 'Enhance the research capabilities of organizations and keep up with the latest developments and best practices in the field',
      imgSrc: '/1234.jpg' // Replace with your image path
    },
    {
      title: 'Other consultancy',
      description: 'We cover other various areas that meet the requirements and objectives of our partners',
      imgSrc: '/12345.jpg' // Replace with your image path
    }
  ];
  return (
    <>
    <div id="services" className="advisory-section">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <div className="advisory-text">
            <h2 className="advisory-title">ADVISORY</h2>
            <p className="advisory-quote">
              <span className="quote-mark">“</span>
              Trends seeks to help organizations envision the future and make informed decisions based on an in-depth understanding of local, regional, and international trends
              <span className="quote-mark">”</span>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="advisory-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example-video-id"
              title="Advisory Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
   
  </div> <Container className="my-5">
      <Row>
        {consultancies.map((consultancy, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card className="h-100">
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src={consultancy.imgSrc} alt={consultancy.title} className="h-100" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="font-weight-bold titel">{consultancy.title}</Card.Title>
                    <Card.Text className="text">{consultancy.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <form className="custom-form">
      
      <div className="form-group">
        <label htmlFor="organizationName">Organization Name:</label>
        <input type="text" id="organizationName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="organizationType">Organization Type:</label>
        <select id="organizationType" className="form-control">
          <option>Government</option>
          <option>Private</option>
          <option>Non-Profit</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="contactName">Contact Name:</label>
        <input type="text" id="contactName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="mobileNo">Mobile No.:</label>
        <input type="text" id="mobileNo" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="typeOfAdvisory">Type of Advisory:</label>
        <select id="typeOfAdvisory" className="form-control">
          <option>Strategic Consultancy</option>
          <option>Technical Consultancy</option>
          <option>Research Consultancy</option>
          <option>Other Consultancy</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" className="form-control"></textarea>
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
    
    </>
  );
};
