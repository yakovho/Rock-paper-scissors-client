import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, InputGroup, Overlay, Tooltip } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ImWhatsapp } from 'react-icons/im';
import { SiTelegram } from 'react-icons/si';
import '../App';

function Connect({ waitConnect }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  let t_url = `https://t.me/share/url?url=${window.location.href}&text= לחץ על הקישור כדי לשחק נגדי באבן נייר ומספריים `

  let w_url = `https://wa.me/?text= ${window.location.href} לחץ על הקישור כדי לשחק נגדי באבן נייר ומספריים `

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setShow(!show)
  }

  return (
    <div className="Connect text">
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className='connect_head'>
              <div className='connect_titles'>שלח קישור זה ליריב שלך כדי שיתחבר</div>
              <InputGroup className="mb-3 connect_url" dir="rtl">
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" defaultValue={window.location.href} />
                <Button ref={target} onClick={copyUrl} className='button_link' variant="outline-secondary" id="button-addon2">העתק</Button>
              </InputGroup>
              <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>הקישור הועתק ללוח</Tooltip>
                )}
              </Overlay>
              <div className='connect_titles connect_titles2'>שלח קישור באמצעות וואטסאפ / טלגרם</div>
              <Row className='connect_icon'>
                <Col xs={3}></Col>
                <Col xs={3}><a href={w_url} target="_blank" className='icon_whatsapp'><ImWhatsapp /></a></Col>
                <Col xs={3}><a href={t_url} target="_blank" className='icon_telegram'><SiTelegram /></a></Col>
                <Col xs={3}></Col>
              </Row>
            </div>
            <div className='status'>{waitConnect}</div>
            <div className='div_button_replay' about><Link to="/" className='button_replay'>לדף הבית</Link></div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Connect;