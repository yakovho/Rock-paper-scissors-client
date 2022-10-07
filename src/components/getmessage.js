import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import '../App';

function Getmassage({ message, setmessage }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const myTimeout = window.setTimeout(() => {
        setShow(false)
        setmessage()
      }, 3000);
    }
  },)

  return (
    <div className="Getmassage">

      <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Body>
          <div class="left">
            <div className='massage'>{message}</div>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  )
}

export default Getmassage;