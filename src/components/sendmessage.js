import React, { useState } from 'react';
import { Container, Row, Col, Button, Toast } from 'react-bootstrap';
import { BiMessage } from 'react-icons/bi';

function Sendmassage({ messageEmoji }) {
    const [message, setmessage] = useState(false);
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    const [show2, setShow2] = useState(false);

    const clickMessage = (e) => {
        messageEmoji(e.target.value);
        setmessage(e.target.value);
        setShow(false)
        setShow2(true);
        const myTimeout = window.setTimeout(() => {
            setShow2(false);
            setmessage();
        }, 3000);
    }
    const emojis = [
        { id: 1, item: '\ud83d\ude02' },
        { id: 2, item: '\ud83d\ude1d' },
        { id: 3, item: '\uD83E\uDD2C' },
        { id: 4, item: '\uD83D\uDE2D' },
        { id: 5, item: '\ud83d\ude24' },
        { id: 6, item: '\ud83d\ude34' }
    ]

    const emoji = emojis.map(item => (
        <Col xs={4} key={item.id}>
            <div >
                <Button className='button_emoji' onClick={clickMessage} value={item.item}>{item.item}</Button>
            </div>
        </Col>
    ));

    return (
        <div className="Sendmassage">
            {!message ?
                <div className='message_top'>
                    <Row>
                        <Col xs={2}><Button className='send_text' onClick={toggleShow}><BiMessage /></Button></Col>
                        <Col xs={10}>
                            <Toast show={show} onClose={toggleShow} className="div_emoji">
                                <Toast.Body>
                                    <Container>
                                        <Row>
                                            {emoji}
                                        </Row>
                                    </Container>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div> :
                <div className='message_bottom'>
                    <Toast onClose={() => setShow2(false)} show={show2} >
                        <Toast.Body>
                            <div class="right">
                                <div className='massage'>{message}</div>
                            </div>
                        </Toast.Body>
                    </Toast>
                </div>}
        </div>
    )
}

export default Sendmassage;