import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { AiOutlineCheck } from "react-icons/ai";
import '../App';
import Swal from 'sweetalert2'
import Sendmassage from './sendmessage'
import Getmassage from './getmessage'

function Select({ ISelect, opponentSelect, setopponentSelect, iDisconnect, messageEmoji, message, setmessage }) {
    const [selecting, setSelecting] = useState()
    const [win, setwin] = useState(0)
    const [draw, setdraw] = useState(0)
    const [lose, setlose] = useState(0)
    const [score, setscore] = useState("")
    const params = useParams();

    const navigate = useNavigate()

    const click_select = (value) => {
        ISelect([params, value]);
        setSelecting(value);
    }

    useEffect(() => {
        if (opponentSelect && selecting) {
            if (selecting === opponentSelect) { setscore("תיקו"); window.setTimeout(() => { setdraw(draw + 1); }, 3000) }

            if (selecting === "scissors" && opponentSelect === "paper") { setscore("ניצחת"); window.setTimeout(() => { setwin(win + 1); }, 3000) }
            if (selecting === "scissors" && opponentSelect === "rock") { setscore("הפסדת"); window.setTimeout(() => { setlose(lose + 1); }, 3000) }

            if (selecting === "paper" && opponentSelect === "scissors") { setscore("הפסדת"); window.setTimeout(() => { setlose(lose + 1); }, 3000) }
            if (selecting === "paper" && opponentSelect === "rock") { setscore("ניצחת"); window.setTimeout(() => { setwin(win + 1); }, 3000) }

            if (selecting === "rock" && opponentSelect === "scissors") { setscore("ניצחת"); window.setTimeout(() => { setwin(win + 1); }, 3000) }
            if (selecting === "rock" && opponentSelect === "paper") { setscore("הפסדת"); window.setTimeout(() => { setlose(lose + 1); }, 3000) }

            const myTimeout = window.setTimeout(() => {
                setscore("")
                setSelecting("")
                setopponentSelect("")
            }, 3000);
        }
    });

    if (win === 3) {
        Swal.fire({
            title: "כל הכבוד ניצחת!", text: `${lose} : ${win}`, color: '#8397cf', icon: 'success',
            denyButtonText: 'הספיק לי, תודה', showDenyButton: true, confirmButtonColor: '#8397cf',
            denyButtonColor: '#8397cf', confirmButtonText: `שחק שוב`,
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isDenied) {
                navigate("../");
                iDisconnect()
            } else if (result.isConfirmed) {
                setwin(0); setdraw(0); setlose(0);
            }
        })
    }

    if (lose === 3) {
        Swal.fire({
            title: "הפסדת...", text: `${lose} : ${win}`, color: '#8397cf', icon: 'error',
            denyButtonText: 'הספיק לי, תודה', showDenyButton: true, confirmButtonColor: '#8397cf',
            denyButtonColor: '#8397cf', confirmButtonText: `שחק שוב`,
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isDenied) {
                navigate("../");
                iDisconnect()
            } else if (result.isConfirmed) {
                setwin(0); setdraw(0); setlose(0);
            }
        })
    }

    let opponentSelect_url = `https://www.rpsgame.org/assets/img/${opponentSelect}.svg`;
    let selecting_url = `https://www.rpsgame.org/assets/img/${selecting}.svg`;

    return (
        <div className="Select text">
            <Container>
                <div className='number_score'>
                    <Row>
                        <Col sm={2}></Col>
                        <Col ><div className='text_score'>ניצחונות</div><div className='number'>{win}</div></Col>
                        <Col ><div className='text_score'>תיקו</div><div className='number'>{draw}</div></Col>
                        <Col ><div className='text_score'>הפסדים</div><div className='number'>{lose}</div></Col>
                        <Col sm={2}></Col>
                    </Row>
                </div>
                <div className='getmassage'>
                    <Row>
                        <Col xs={8} sm={3}><Sendmassage messageEmoji={messageEmoji} /></Col>
                        <Col xs={1} sm={6}></Col>
                        <Col xs={3} sm={3}><div><Getmassage message={message} setmessage={setmessage} /></div></Col>
                    </Row>
                </div>
                <div className='select_div'>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={5}>
                            <div className='select_1'>הבחירה שלך</div>
                            <div className='select_button'>
                                {selecting ? <img className='select' draggable="false" src={selecting_url} alt='select'></img> :
                                    <div>
                                        <button className='button_select' onClick={() => click_select("scissors")}><img className='select' draggable="false" src="https://www.rpsgame.org/assets/img/scissors.svg" alt='select'></img></button>
                                        <button className='button_select' onClick={() => click_select("paper")}><img className='select' draggable="false" src="https://www.rpsgame.org/assets/img/paper.svg" alt='select'></img></button>
                                        <button className='button_select' onClick={() => click_select("rock")}><img className='select' draggable="false" src="https://www.rpsgame.org/assets/img/rock.svg" alt='select'></img></button>
                                    </div>}
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className='select_2'>הבחירה של היריב</div>
                            <div className='select_button'>
                                {opponentSelect && selecting ? <img className='select' src={opponentSelect_url} alt='select'></img> : opponentSelect ? <div> <div className='select_status'><AiOutlineCheck /></div><div className='await'> היריב בחר</div></div> :
                                    <div><div className='select_status'>< Spinner className='select_status' animation="border" variant="success" /></div><div className='await'>ממתין לבחירת היריב...</div></div>}
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </div>
            </Container>
            <div className='score'>{score}</div>
        </div>
    )
}

export default Select;