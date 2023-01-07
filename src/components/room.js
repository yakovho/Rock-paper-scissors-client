import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { io } from 'socket.io-client'
import Connect from './connect'
import Select from './select'
import '../App';
import Swal from 'sweetalert2';

const socket = io('https://rps-server1.onrender.com/')

function Room() {
    const [opponentSelect, setopponentSelect] = useState()
    const [opponentConnected, setopponentConnected] = useState()
    const [message, setmessage] = useState()
    const [waitConnect, setwaitConnect] = useState("ממתין להתחברות היריב...")
    const params = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        socket.on('connect', () => { console.log(socket.id) })
        const url = window.location.href;
        const strs = url.split('/');
        const id = strs.at(-1)

        socket.emit('room', id);

        socket.on('fullroom', () => {
            Swal.fire({
                title: "החדר מלא", text: "יש כבר 2 שחקנים בחדר זה", color: '#114a76',
                icon: 'error', confirmButtonColor: '#7DABD2', confirmButtonText: `לדף הבית`,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("../");
                }
            })
        })

        socket.on('opponent connected', () => {
            setopponentConnected(true)
        })

        socket.on('opponentdisconnect', () => {
            setopponentConnected(false);
            setwaitConnect("היריב התנתק");
        })

        socket.on('opponentSelect', (data) => {
            setopponentSelect(data)
        })

        socket.on('getMessage', (data) => {
            setmessage(data)
        })

    }, [])

    const select = (data) => {
        socket.emit('select', data);
    }

    const iDisconnect = () => {
        socket.emit('iDisconnect', [params, "iDisconnect"]);
    }
    const messageEmoji = (data) => {
        socket.emit('messageEmoji', [params, data]);
    }

    return (
        <div className="Room">
            {opponentConnected ? <Select ISelect={select} opponentSelect={opponentSelect} setopponentSelect={setopponentSelect}
                iDisconnect={iDisconnect} messageEmoji={messageEmoji} message={message} setmessage={setmessage} /> :
                <Connect waitConnect={waitConnect} />}
        </div>
    )
}
export default Room;
