import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';

function Footer() {


  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Row className='social'>
              <Col xs={3}></Col>
              <Col xs={2}><a href="https://www.linkedin.com/in/yakov-horwitz-47b080235/" className='btn button_social'><FaLinkedinIn /></a></Col>
              <Col xs={2}><a href="https://github.com/yakovho" className='btn button_social'><BsGithub /></a></Col>
              <Col xs={2}><a href="https://api.whatsapp.com/send?phone=972509651818" className='btn button_social'><ImWhatsapp /></a></Col>
              <Col xs={3}></Col>
            </Row>
            <div className='since'>2022 &#169;</div>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;